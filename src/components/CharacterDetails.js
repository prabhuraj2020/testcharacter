import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => setCharacter(response.data))
      .catch(error => console.error('Error fetching character details:', error));
  }, [characterId]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="center">
    <h1>Character Details</h1>  
    <div className="character-main">      
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {/* Add more details as needed */}
    </div>
    </div>
  );
};

export default CharacterDetails;
