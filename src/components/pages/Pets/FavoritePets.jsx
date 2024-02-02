import React, { useState, useEffect } from 'react';

import './Pets.css';
import logoPerro from '../../../assets/img/dog-1.jpg';
import Perro1 from '../../../assets/img/dog-3.jpg';
import Perro2 from '../../../assets/img/dog-4.jpg';
import Perro3 from '../../../assets/img/dog-5.jpg';
import Perro4 from '../../../assets/img/dog-6.jpg';
import logoGato from '../../../assets/img/dog-2.jpg';
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
        <div className="pets">
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
      </div>
    </div>
  );
};

export default FavoritePets;