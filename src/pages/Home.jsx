import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { getCharacters, getPlanets } from "../services.jsx";
import charactersImage from "../assets/img/characters.png";
import planetsImage from "../assets/img/planets.png";





export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	

	useEffect(() => {
		getPlanets()
			.then(data => {
				dispatch({ type: "setPlanets", payload: data.results });
			})
			.catch(error => {
				console.error("Error fetching planets:", error);
			}
			);

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
			<img src={charactersImage} alt="Characters" />
			<CardCharacter />
			<img src={planetsImage} alt="Planets" />
			<CardPlanet />
		</div>
	);
}; 