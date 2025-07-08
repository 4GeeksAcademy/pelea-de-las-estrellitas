import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import planeta from "../assets/img/planeta.png";

export const CardPlanet = () => {
  const { store } = useGlobalReducer();

  
  
  return (
      <div className="container my-4">
        <div className="row">
          {store.planets.length === 0 ? (
            <p>Está cargando primo, espera un rato...</p>
          ) : (
            store.planets.map((planet, index) => {
          
              
              return(
              <div className="col-md-3 col-lg-3 mb-4" key={index}>
                <div className="card h-100">
                  <img src= {planeta}/>
                  <div className="card-body">
                    <h3 className="card-title">{planet.name}</h3>
                    <p className="card-text">
                      <strong>Terrain:</strong> {planet.terrain}<br />
                      <strong>Climate:</strong> {planet.climate}<br />
                      <strong>Rotation:</strong> {planet.rotation_period}<br />
                      <strong>Diameter:</strong> {planet.diameter}
                    </p>
                    <Link to={`/details/${index + 1}`} className="btn btn-primary">
                      Learn More
                    </Link>
                    <i className="fa-regular fa-face-grin-hearts float-end mt-2"></i>
                  </div>
                </div>
              </div>
            )})
          )}
        </div>
      </div>
    );
  };