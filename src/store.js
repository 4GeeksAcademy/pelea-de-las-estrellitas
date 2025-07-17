export const initialStore = () => {
  let favorites = [];
  try {
    const storeFavorites = localStorage.getItem('favorites');
    if (storeFavorites) {
      favorites = JSON.parse(storeFavorites);
    }
  } catch (error) {
    favorites = [];
  }
  return {
    message: null,
    characters: [],
    planets: [],
    vehicles: [],
    favorites: favorites,
   
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'get_characters': {
      const { character } = action.payload;
      return {
        ...store,
        characters: [...store.characters, character]
      };
    }

    case 'setCharacters': {
      return {
        ...store,
        characters: action.payload
      };
    }

    case 'setPlanets': {
      return {
        ...store,
        planets: action.payload
      };
    }

    case 'get_planets': {
      const { planet } = action.payload;
      return {
        ...store,
        planets: [...store.planets, planet]
      };
    }

    case 'get_vehicles': {
      const { vehicle } = action.payload;
      return {
        ...store,
        vehicles: [...store.vehicles, vehicle]
      };
    }
    case 'setVehicles': {
      return {
        ...store,
        vehicles: action.payload
      };
    }

    case 'setFavorites': {

      return {
        ...store,
        favorites: action.payload
      };
    }


    default:
      throw Error('Unknown action.');
  }
}
