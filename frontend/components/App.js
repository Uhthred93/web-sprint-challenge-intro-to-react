import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchPlanetsAndPeople = async () => {
      try {
        const [planetsResponse, peopleResponse] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople)
        ]);

        const planets = planetsResponse.data;
        const people = peopleResponse.data;

        const updatedCharacters = people.map(character => {
          const homeworld = planets.find(planet => planet.id === character.homeworld);
          return { ...character, homeworld: homeworld ? homeworld.name : 'Unknown' };
        });

        setCharacters(updatedCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlanetsAndPeople();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p></p>
      {characters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
