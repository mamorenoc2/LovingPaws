import React from 'react'
import { auth } from '../../../firebase/firebase'
import './Pets.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPetData } from '../../../store/mascotas/mascotas_db'
import { onAuthStateChanged } from 'firebase/auth';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';


const PetsDescription = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);
  let { id } = useParams();
  const [petData, setPetData] = useState(null);
  const [isLiked, setIsLiked, isAdopted, setIsAdopted] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (petData) {
      const favoritePets = JSON.parse(localStorage.getItem('favoritePets')) || [];
      if (isLiked) {
        const newFavoritePets = favoritePets.filter(pet => pet.id !== petData.id);
        localStorage.setItem('favoritePets', JSON.stringify(newFavoritePets));
      } else {
        favoritePets.push(petData);
        localStorage.setItem('favoritePets', JSON.stringify(favoritePets));
      }
    }
  };

  const toggleAdopted = (pet) => {
    if (petData) {
      const adoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
      const isAlreadyAdopted = adoptedPets.some(adoptedPet => adoptedPet.id === pet.id);

      if (!isAlreadyAdopted) {
        if (isAuthenticated) {
          adoptedPets.push(pet);
          localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));
          navigate('/home');
        } else {
          // Redirect to login page if not authenticated
          navigate('/user_login');
        }
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPetData(id);
      setPetData(data);
      const favoritePets = JSON.parse(localStorage.getItem('favoritePets')) || [];
      setIsLiked(favoritePets.some(pet => pet.id === data.id));
    };

    fetchData();
  }, [id]);

  return (
    <div className='petDescription'>
      {petData ? (
      
<div className='pet__container'>
        <div className='pet__img-container'>
        <button onClick={() => navigate(-1)} style={{position: 'absolute', width:"50px", opacity:0.8, fontSize: '2em' }}>&larr;</button>
          <img src={petData ? petData.animal_photo : 'Cargando...'} alt="" />
        </div>
        <div className='pet__info-container'>
          <div className='pet__info-content'>
            <div className='pet__info-name' style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <h2>{petData ? petData.nombre : 'Cargando...'}</h2>
              {petData.genero === 'hembra' && <FontAwesomeIcon icon={faVenus} color='pink' style={{ marginRight: '5px' }} />}
              {petData.genero === 'macho' && <FontAwesomeIcon icon={faMars} color='blue' style={{ marginRight: '5px' }} />}
            </div>
            <div className='pet__info-like' onClick={toggleLike}>
              <FontAwesomeIcon icon={faHeart} color={isLiked ? 'red' : 'black'} style={{ fontSize: '2em' }} />
            </div>
          </div>
          <div className='pet__info-content'>
            <p>{petData.raza}</p>
            <p>{petData.edad_meses} meses</p>
          </div>
          <h5>Personalidad</h5>
          <div className='pet__info-content'>
            {petData ? petData.caracteristicas.map((caracteristica, index) => (
              <div key={index} className='pet__feacture'>
                <p>{caracteristica}</p>
              </div>
            )) : (
              <p>Cargando...</p>
            )}
          </div>
          <h5>Historia de {petData.nombre}</h5>
          <div className='pet__info-content'>
            <p>{petData.descripcion}</p>
          </div>
          <div className='pet__info-content'>
            <div className='user_space'>
            <div className='pet__info-content'>
              <p>publicado por:</p>
              <p>maria dolores</p>
            </div>
            </div>
            <button onClick={() => toggleAdopted(petData)}>¡Adoptar!</button>
          </div>
          
        </div>
      </div>
    ) : (
      <p>Cargando...</p>
    )}
    </div>
  )
}

export default PetsDescription
