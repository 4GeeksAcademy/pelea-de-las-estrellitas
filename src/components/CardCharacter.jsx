import React, { useEffect } from "react";
import { json, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import laser from "../assets/img/laser.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CharacterDetail } from "../pages/CharacterDetail.jsx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CardCharacter = () => {
  const { store, dispatch } = useGlobalReducer();

if (store.characters.length === 0) {
    return <p>Está cargando primo, espera un rato...</p>;
  }

function addFavorite(character, id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Evitar duplicados por name+type+id
  /* const exists = favorites.some(fav => fav.id === id && fav.type === type);
  if (exists) {
    console.log('Este ítem ya está en favoritos.');
    return;
  }
*/
  const newFavorite = {
    name: character,
    id: id
  };
  console.log("Nuevo favorito:", newFavorite);

  favorites.push(newFavorite);
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log(favorites);
  
  dispatch({
    type: 'setFavorites',
    payload: favorites
  });
} 
console.log(store.favorites);



  return (
    <div className="container my-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
          {store.characters.map((character) => (
              <SwiperSlide key={character.uid}>
            <div className="col-md-3 col-lg-3 mb-4" >
              <div className="card h-100">
                <img src={laser} />
                <div className="card-body">
                  <h5 className="card-title">{character.properties.name}</h5>
                  <p className="card-text">
                    <strong>Gender:</strong> {character.properties.gender}<br />
                    <strong>Birth year:</strong> {character.properties.birth_year}<br />
                    <strong>Height:</strong> {character.properties.height}<br />
                    <strong>Mass:</strong> {character.properties.mass}
                  </p>
                  <Link to={`/people/${character.uid}`} className="btn btn-primary">
                    Learn More
                  </Link>
                  <i className="fa-regular fa-face-grin-hearts float-end mt-2" onClick={() => addFavorite( character.properties.name, character.uid )} ></i>
                </div>
              </div>
            </div>
              </SwiperSlide>
          ))}
              </Swiper>
      </div>
  );
};