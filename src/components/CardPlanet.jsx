import { Link } from "react-router-dom";

export const CardPlanet = () => {
    return (

<div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <Link to="/details" className="btn btn-primary">Learn More</Link>
    <i className="fa-regular fa-face-grin-hearts"></i>
  </div>
</div>
    );
}  