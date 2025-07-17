import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import lilo from "../assets/img/lilo.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PlanetDetail } from "../pages/PlanetDetail.jsx";


export const CardPlanet = () => {
  const { store, dispatch } = useGlobalReducer();


if (store.planets.length === 0) {
    return <p>Está cargando primo, espera un rato...</p>;
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
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planet.uid}.jpg`} 
                onError={(e) => { e.target.src = lilo; }}
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.properties.name}</h5>
                  <p className="card-text">
                    <strong>Diameter:</strong> {planet.properties.diameter}<br />
                    <strong>Climante:</strong> {planet.properties.climate}<br />
                    <strong>Rotation:</strong> {planet.properties.rotation_period}<br />
                    <strong>Gravity:</strong> {planet.properties.gravity}
                  </p>
                  <Link to={`/planets/${index + 1}`} className="btn btn-primary">
                    Learn More
                  </Link>
                 <i className="fa-regular fa-face-grin-hearts float-end mt-2" onClick={() => addFavorite(planet.properties.name, planet.uid)} ></i>
                </div>
              </div>
            </div>
              </SwiperSlide>
          ))}
              </Swiper>
      </div>
  );
};


  