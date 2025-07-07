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
						<div className="dropdown-center">
							<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								{/* <li><a className="dropdown-item" href="#">Action</a></li> */}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};