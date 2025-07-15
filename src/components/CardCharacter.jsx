import React from "react";
import { Link } from "react-router-dom";
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

function addFavorite(character, type, id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Evitar duplicados por name+type+id
  const exists = favorites.some(fav => fav.id === id && fav.type === type);
  if (exists) {
    console.log('Este ítem ya está en favoritos.');
    return;
  }

  const newFavorite = {
    name: character.properties.name,
    id,
    type
  };

  favorites.push(newFavorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  
  dispatch({
    type: 'setFavorites',
    payload: favorites
  });
}



  return (
    <div className="container my-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
          {store.characters.map((character, index) => (
              <SwiperSlide key={index}>
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
                  <Link to={`/people/${index + 1}`} className="btn btn-primary">
                    Learn More
                  </Link>
                  <i className="fa-regular fa-face-grin-hearts float-end mt-2" onClick={() => addFavorite( character, 'people', index + 1 )} ></i>
                </div>
              </div>
            </div>
              </SwiperSlide>
          ))}
              </Swiper>
      </div>
  );
};