import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import laser from "../assets/img/laser.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CardCharacter = () => {
  const { store } = useGlobalReducer();

if (store.characters.length === 0) {
    return <p>Está cargando primo, espera un rato...</p>;
  }

  return (
    <div className="container my-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
           /*  pagination={{
              clickable: true,
            }}
            modules={[Pagination]} */
            className="mySwiper"
          >
          {store.characters.map((character, index) => (
              <SwiperSlide key={index}>
            <div className="col-md-3 col-lg-3 mb-4" >
              <div className="card h-100">
                <img src={laser} />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <strong>Gender:</strong> {character.gender}<br />
                    <strong>Birth year:</strong> {character.birth_year}<br />
                    <strong>Height:</strong> {character.height}<br />
                    <strong>Mass:</strong> {character.mass}
                  </p>
                  <Link to={`/details/${index + 1}`} className="btn btn-primary">
                    Learn More
                  </Link>
                  <i className="fa-regular fa-face-grin-hearts float-end mt-2"></i>
                </div>
              </div>
            </div>
              </SwiperSlide>
          ))}
              </Swiper>
      </div>
  );
};