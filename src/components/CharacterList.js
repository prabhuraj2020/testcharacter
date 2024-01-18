import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (   
    <div>
      <h1>Rick and Morty Characters</h1>      
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-item">
            <Link to={`/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>              
            </div>
            </Link>
          </div>          
        ))}
      </div>      
    </div>
  );
};

export default CharacterList;
