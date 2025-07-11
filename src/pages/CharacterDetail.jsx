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

  if (loading) return <p>Loading...</p>;
  if (!character) return <p>Character not found.</p>;

  return (
    <div>
      <h1>{character.properties.name}</h1>
      <p><strong>Gender:</strong> {character.properties.gender}</p>
      <p><strong>Birth year:</strong> {character.properties.birth_year}</p>
      <p><strong>Height:</strong> {character.properties.height}</p>
      <p><strong>Mass:</strong> {character.properties.mass}</p>
      <p><strong>Hair Color:</strong> {character.properties.hair_color}</p>
      <p><strong>Eye Color:</strong> {character.properties.eye_color}</p>
      <p><strong>Skin Color:</strong> {character.properties.skin_color}</p>
    </div>
  );
}

