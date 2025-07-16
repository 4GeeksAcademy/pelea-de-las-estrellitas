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
    favorites: favorites,
    todos: [
    /*   {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      } */,
    ]
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {
    /*  case 'add_task':
 
       const { id,  color } = action.payload
 
       return {
         ...store,
         todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
       }; */

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
