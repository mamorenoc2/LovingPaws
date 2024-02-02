import React, { useState, useEffect } from 'react';
import '../Pets/Pets.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);

  useEffect(() => {
    const savedPets = localStorage.getItem('adoptedPets');
    if (savedPets) {
      setAdoptedPets(JSON.parse(savedPets));
    }
  }, []);

  return (
    <div className='pets_home'>
      <div className='pets_home-container'>
        <h1 className='title'>Mascotas Adoptadas</h1>
        <div className="pets_favorites">
          {adoptedPets.map((pet, index) => (
            <div className="pets__panel" key={index}>
              <NavLink to={`/petsList/petDescription/${pet.id}`}>
                <div className="pets__card">
                  <img src={pet.animal_photo} alt="" />
                  <p className="pet-name">{pet.nombre}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;