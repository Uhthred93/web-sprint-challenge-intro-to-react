import React, { useState } from 'react';

function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      <p>ID: {character.id}</p>
      <p>Date of Birth: {character.birth_year}</p>
      {showHomeworld && (
        <p className="character-planet">Homeworld: {character.homeworld}</p>
      )}
    </div>
  );
}

export default Character;
