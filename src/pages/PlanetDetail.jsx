import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function PlanetDetail() {
    const { id } = useParams();
    const [planet, setplanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`) 
            .then(res => res.json())
            .then(data => {
                setplanet(data.result);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!planet) return <p>No se ha encontrado el planeta que buscas...</p>;

       return (
        <div className="planet-detail-container">
            <div className="planet-card">
                <h1 className="planet-name">{planet.properties.name}</h1>
                <ul className="planet-info">
                    <li><strong>Diámetro:</strong> {planet.properties.diameter}</li>
                    <li><strong>Clima:</strong> {planet.properties.climate}</li>
                    <li><strong>Rotación:</strong> {planet.properties.rotation_period}</li>
                    <li><strong>Gravedad:</strong> {planet.properties.gravity}</li>
                </ul>
            </div>
            <div className="planet-image"></div>
        </div>
    );
}
