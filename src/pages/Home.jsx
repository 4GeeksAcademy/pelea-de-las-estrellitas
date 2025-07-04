import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<CardCharacter />
			<h2>Planets</h2>
			<CardPlanet />
		</div>
	);
}; 