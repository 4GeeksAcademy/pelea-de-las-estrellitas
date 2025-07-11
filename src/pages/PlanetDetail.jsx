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

    if (loading) return <p>Loading...</p>;
    if (!planet) return <p>planet not found.</p>;

    return (
        <div>
            <h1>{planet.properties.name}</h1>
            <strong>Diameter:</strong> {planet.properties.diameter}<br />
            <strong>Climante:</strong> {planet.properties.climate}<br />
            <strong>Rotation:</strong> {planet.properties.rotation_period}<br />
            <strong>Gravity:</strong> {planet.properties.gravity}
        </div>
    );
}

