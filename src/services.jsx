import { array } from "prop-types";

export async function getCharacters() {
    try {
        const response = await fetch('https://www.swapi.tech/api/people/?expanded=true');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }   
    
}

export async function getPlanets() {
    
    try {
        const response = await fetch('https://www.swapi.tech/api/planets/?expanded=true');
        
      if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
        
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }  
}   