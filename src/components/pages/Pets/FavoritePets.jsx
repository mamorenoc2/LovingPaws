import React, { useState, useEffect } from 'react';
import './Pets.css';
import { NavLink } from 'react-router-dom';

const FavoritePets = () => {
  const [favoritePets, setFavoritePets] = useState([]);

  useEffect(() => {
    const savedPets = localStorage.getItem('favoritePets');
    if (savedPets) {
      setFavoritePets(JSON.parse(savedPets));
    }
  }, []);

  return (
    <div className='pets_home'>
      <div className='pets_home-container'>
        <h1 className='title'>Mascotas Favoritas</h1>

        {favoritePets.length === 0 ? (
          <h2>Vaya, parece que aún no tiene mascotas favoritas.</h2>
        ) : (
          <div className="pets_favorites">
            {favoritePets.map((pet, index) => (
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
        )}
      </div>
    </div>
  );
};

export default FavoritePets;
