import { Link } from "react-router-dom";
import starWarsImage from "../assets/img/starwars.png";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Navbar = () => {
	  const { store, dispatch } = useGlobalReducer();

useEffect(() => {
// Cargar favoritos desde localStorage al iniciar
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log(favorites);
},[])
  
console.log(store.favorites);  

/* // Eliminar favorito
  function deleteFavorite(favoriteToDelete) {
// Hacemos filter para eliminar el favorito seleccionado y mantener el resto	
    const updatedFavorites = store.favorites.filter(
      fav => !(fav.id === favoriteToDelete.id && fav.type === favoriteToDelete.type)
    );
// Actualizo los favoritos 
    dispatch({
      type: 'setFavorites',
      payload: updatedFavorites
    });
//Guardo lo actualizado en LocalStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert("Personaje eliminado de favoritos");
  }
*/
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<img src={starWarsImage} alt="Nav Photo" className="container-img" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown-center">
							<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								{store.favorites.length > 0 ? (
									store.favorites.map((favorite, index) => (
										<li key={index}>
											<Link className="dropdown-item" to={`/${favorite.type}/${favorite.id}`}>
												{favorite.name}
											</Link>
											<button
												onClick={() => deleteFavorite(favorite)}
												className="btn btn-sm btn-outline-danger ms-2"
												title="Eliminar favorito"
											>
												✖
											</button>
										</li>
									))
								) : (

									<li className="dropdown-item">
										No favorites added yet!
									</li>
								)}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};