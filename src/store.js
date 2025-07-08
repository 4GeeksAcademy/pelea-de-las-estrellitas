export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    planets: [],
    favorites: [],
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
  switch(action.type){
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

    default:
      throw Error('Unknown action.');
  }
}
