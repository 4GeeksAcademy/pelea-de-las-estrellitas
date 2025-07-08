import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { getCharacters } from "../services.jsx";
import charactersImage from "../assets/img/characters.png";
import planetsImage from "../assets/img/planets.png";




export const Details = () => {

  const {store, dispatch} =useGlobalReducer()
  
 console.log(getCharacters());

 useEffect(() => {
        getCharacters()
            .then(data => {
                dispatch({ type: "setCharacters", payload: data.results });
            })
            .catch(error => {
                console.error("Error fetching characters:", error);
            });
    }, [dispatch]);	
 

    return (
        <div className="text-center mt-5">
            <h2>{charactersImage}</h2>
            <CardCharacter />
            <h2>{planetsImage}</h2>
            <CardPlanet />
        </div>
    );
}; 