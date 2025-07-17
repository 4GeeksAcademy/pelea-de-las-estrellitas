import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardVehicle } from "../components/CardVehicle.jsx";
import { getVehicles } from "../services.jsx";
import { Link } from "react-router-dom";
import { getCharacters, getPlanets } from "../services.jsx";
import tituloc from "../assets/img/tituloc.png";
import titulop from "../assets/img/titulop.png";
import titulov from "../assets/img/titulov.png";
import { CharacterDetail } from "./CharacterDetail.jsx";
import { PlanetDetail } from "./PlanetDetail.jsx";





export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	

	useEffect(() => {
		getPlanets()
			.then(data => {
				dispatch({ type: "setPlanets", payload: data });
			
				
			})
			.catch(error => {
				console.error("Error fetching planets:", error);
			}
			);

		getVehicles()
			.then(data => {
				dispatch({ type: "setVehicles", payload: data });
			})
			.catch(error => {
				console.error("Error fetching vehicles:", error);
			});	

		getCharacters()
			.then(data => {
				dispatch({ type: "setCharacters", payload: data });
			})
			.catch(error => {
				console.error("Error fetching characters:", error);
			});
	}, [dispatch]);


	return (
		<div className="text-center mt-5">
			<img src={tituloc} alt="Characters" />
			<CardCharacter />
			<img src={titulop} alt="Planets" />
			<CardPlanet />
			<img src={titulov} alt="Vehicles" />
			<CardVehicle />
		</div>
	);
}; 