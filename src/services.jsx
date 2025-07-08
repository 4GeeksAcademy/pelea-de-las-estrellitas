export async function getCharacters() {
    try {
        const response = await fetch('https://www.swapi.tech/api/people/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }   
    
}

export async function getPlanets() {
    try {
        const response = await fetch('https://www.swapi.tech/api/planets/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }   
}   