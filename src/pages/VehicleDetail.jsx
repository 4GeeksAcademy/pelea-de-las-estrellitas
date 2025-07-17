import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function VehicleDetail() {
  const id = useParams().id;
  

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => {
        setVehicle(data.result);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!vehicle) return <p>No se ha encontrado el vehículo que buscas...</p>;

 return (
    <div className="vehicle-detail-container">
      <div className="vehicle-card">
        <h1 className="vehicle-name">{vehicle.properties.name}</h1>
        <ul className="vehicle-info">
          <li><strong>Modelo:</strong> {vehicle.properties.model}</li>
          <li><strong>Manufactura:</strong> {vehicle.properties.manufacturer}</li>
          <li><strong>Coste:</strong> {vehicle.properties.cost_in_credits}</li>
          <li><strong>Largo:</strong> {vehicle.properties.length} </li>
          <li><strong>Pasajeros:</strong> {vehicle.properties.passengers}</li>
          <li><strong>Clase:</strong> {vehicle.properties.vehicle_class}</li>
          <li><strong>Capacidad de carga:</strong> {vehicle.properties.cargo_capacity}</li>
        </ul>
      </div>
      <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${vehicle.uid}.jpg`} className='vehicle-image'/>
    </div>
  );
}