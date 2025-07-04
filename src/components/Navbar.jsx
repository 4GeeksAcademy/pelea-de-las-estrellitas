import { Link } from "react-router-dom";
import starWarsImage from "../assets/img/starwars.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={starWarsImage} alt="Nav Photo" className="container-img" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};