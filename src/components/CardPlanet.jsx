import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import planeta from "../assets/img/planeta.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Details } from "../pages/Details.jsx";

export const CardPlanet = () => {
  const { store, dispatch } = useGlobalReducer();

 /*  useEffect(() => { */
if (store.planets.length === 0) {
    return <p>Está cargando primo, espera un rato...</p>;
  }
/* } */

function addFavorite(planet) {   
  const isFavorite = store.favorites.some(fav => fav.name === planet.name);
  if (isFavorite) {
    alert("Ya has agregado este planeta a favoritos");
  } else {
    dispatch({
      type: 'add_favorites',
      payload: planet
    });
    alert("Planeta agregado a favoritos");
  }
}


  return (
    <div className="container my-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
          {store.planets.map((planet, index) => (
              <SwiperSlide key={index}>
            <div className="col-md-3 col-lg-3 mb-4" >
              <div className="card h-100">
                <img src={planeta} />
                <div className="card-body">
                  <h5 className="card-title">{planet.properties.name}</h5>
                  <p className="card-text">
                    <strong>Diameter:</strong> {planet.properties.diameter}<br />
                    <strong>Climante:</strong> {planet.properties.climate}<br />
                    <strong>Rotation:</strong> {planet.properties.rotation_period}<br />
                    <strong>Gravity:</strong> {planet.properties.gravity}
                  </p>
                  <Link to={`/details/${index + 1}`} className="btn btn-primary">
                    Learn More
                  </Link>
                  <i className="fa-regular fa-face-grin-hearts float-end mt-2" onClick={() => addFavorite(planet)} ></i>
                </div>
              </div>
            </div>
              </SwiperSlide>
          ))}
              </Swiper>
      </div>
  );
};


  