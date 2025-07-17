import React, { useEffect } from "react";
import { json, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import laser from "../assets/img/laser.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { VehicleDetail } from "../pages/VehicleDetail.jsx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CardVehicle = () => {
  const { store, dispatch } = useGlobalReducer();

  if (store.vehicles.length === 0) {
    return <p>Está cargando primo, espera un rato...</p>;
  }

  function addFavorite(vehicle, id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    
    const newFavorite = {
      name: vehicle,
      id: id
    };
    console.log("Nuevo favorito:", newFavorite);
    const updateFavorites = [...store.favorites, newFavorite];

    localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    console.log(favorites);

    dispatch({
      type: 'setFavorites',
      payload: updateFavorites
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
        {store.vehicles.map((vehicle) => (
          <SwiperSlide key={vehicle.uid}>
            <div className="col-md-3 col-lg-3 mb-4" >
              <div className="card h-100">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${vehicle.uid}.jpg`} />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.properties.name}</h5>
                  <p className="card-text">
                    <strong>Model:</strong> {vehicle.properties.model}<br />
                    <strong>Cost:</strong> {vehicle.properties.cost_in_credits}<br />
                    <strong>Lenght:</strong> {vehicle.properties.length}<br />
                    <strong>Passengers:</strong> {vehicle.properties.passengers}
                  </p>
                  <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-success">
                    Learn More
                  </Link>
                  <i className="fa-regular fa-face-grin-hearts float-end mt-2" onClick={() => addFavorite(vehicle.properties.name, vehicle.uid)} ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
