import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const [id] = useState(useParams().id);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};
export default Detail;
