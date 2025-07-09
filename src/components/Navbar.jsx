import { Link } from "react-router-dom";
import starWarsImage from "../assets/img/starwars.png";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
const { store,dispatch } = useGlobalReducer();


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
											<Link className="dropdown-item" to={`/details/${favorite.id}`}>
												{favorite.name}
												</Link>
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