import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function CharacterDetail() {
  const id = useParams().id;
  /* console.log(id); */

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data.result);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!character) return <p>No se ha encontrado el personaje que buscas...</p>;

 return (
    <div className="character-detail-container">
      <div className="character-card">
        <h1 className="character-name">{character.properties.name}</h1>
        <ul className="character-info">
          <li><strong>Género:</strong> {character.properties.gender}</li>
          <li><strong>Año de nacimiento:</strong> {character.properties.birth_year}</li>
          <li><strong>Altura:</strong> {character.properties.height} cm</li>
          <li><strong>Masa:</strong> {character.properties.mass} kg</li>
          <li><strong>Color de pelo:</strong> {character.properties.hair_color}</li>
          <li><strong>Color de ojos:</strong> {character.properties.eye_color}</li>
          <li><strong>Color de piel:</strong> {character.properties.skin_color}</li>
        </ul>
      </div>
      <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${character.uid}.jpg`} className='character-image'/>
    </div>
  );
}

