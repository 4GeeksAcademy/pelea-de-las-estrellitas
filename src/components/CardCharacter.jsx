import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import laser from "../assets/img/laser.png";


export const CardCharacter = () => {
  const { store } = useGlobalReducer();
  console.log("soy store", store.characters);
  

  return (
    <div className="container my-4">
      <div className="row">
        {store.characters.length === 0 ? (
          <p>Está cargando primo, espera un rato...</p>
        ) : (
          store.characters.map((character, index) => (
            <div className="col-md-3 col-lg-3 mb-4" key={index}>
              <div className="card h-100">
                <img src= {laser}/>
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
          ))
        )}
      </div>
    </div>
   );
};