import React, { useState } from 'react';
import './UserSection.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const CreatePets = () => {
  const navigate = useNavigate();


  // Obtener el usuario actual
  const auth = getAuth();
  let currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user;
    }
  });

  const handleCreatePets = async (e) => {
    try {
      e.preventDefault();
      const animal = e.target.animal.value;
      const animal_photo = e.target.animal_photo.value;
      const nombre = e.target.nombre.value;
      const raza = e.target.raza.value;
      const genero = e.target.genero.value;
      const descripcion = e.target.descripcion.value;
      const edad = e.target.edad.value;
      const c1 = e.target.characteristic1.value;
      const c2 = e.target.characteristic2.value;
      const c3 = e.target.characteristic3.value;

      if (currentUser) {
        const userDocRef = await addDoc(collection(db, 'mascotas'), {
          user_id: currentUser.uid,
          animal: animal,
          animal_photo: animal_photo,
          nombre: nombre,
          raza: raza,
          genero: genero,
          descripcion: descripcion,
          edad_meses: edad,
          caracteristicas: [c1, c2, c3],
        });

        navigate('/home');
      } else {
        console.error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al crear mascota', error.message);
      console.error('Error detallado:', error);
    }
  };

  return (
    <div className='create_pet_container'>
    <form className="login-form-page" onSubmit={(e) => handleCreatePets(e)}>
      <h1 className="title">Crea el perfil de tu mascota</h1>
      <div className='description'>
      <p>Entre más detalles tengas, mejores oportunidades tienes de que encuentre un nuevo hogar</p>
      </div>
      

      <input type="text" placeholder="Animal" name="animal" />
      <input type="text" placeholder="Foto animal (Link)" name="animal_photo" />
      <input type="text" placeholder="Nombre" name="nombre" />
      <input type="text" placeholder="Raza" name="raza" />
      <input type="number" placeholder="Edad en meses" name="edad" />
      <input type="text" placeholder="Género" name="genero" />
      <input type="text" placeholder="Descripción" name="descripcion" />

      <div className='caracteristicas'>
        <p>Características:</p>
        <input
          type="text"
          placeholder="Característica 1"
          name='characteristic1'
        />
        <input
          type="text"
          placeholder="Característica 2"
          name='characteristic2'
        />
        <input
          type="text"
          placeholder="Característica 3"
          name='characteristic3'
        />
      </div>

      <button type="submit">Crear mascota</button>
    </form>
    </div>
    
  );
};

export default CreatePets;
