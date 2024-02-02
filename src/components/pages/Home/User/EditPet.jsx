import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../../../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { getPetData, updatePetData } from '../../../../store/mascotas/mascotas_db';

const EditPet = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user;
    }
  });

  const { id } = useParams();
  const [petData, setPetData] = useState({
    animal: '',
    animal_photo: '',
    nombre: '',
    raza: '',
    genero: '',
    descripcion: '',
    edad: 0,
    characteristic1: '',
    characteristic2: '',
    characteristic3: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPetData(id);
        if (data) {
          setPetData({
            animal: data.animal || '',
            animal_photo: data.animal_photo || '',
            nombre: data.nombre || '',
            raza: data.raza || '',
            genero: data.genero || '',
            edad_mese: data.edad_meses || 0,
            descripcion: data.descripcion || '',
            characteristic1: data.caracteristicas[0] || '',
            characteristic2: data.caracteristicas[1] || '',
            characteristic3: data.caracteristicas[2] || '',
          });
        } else {
          console.error('No se encontraron datos para la mascota.');
        }
      } catch (error) {
        console.error('Error al obtener datos de la mascota:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditPet = async (e) => {
    try {
      e.preventDefault();

      if (currentUser) {
        // Update the pet data in the database
        await updatePetData(id, petData);

        // Redirect to home after updating
        navigate('/home');
      } else {
        console.error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al actualizar mascota', error.message);
      console.error('Error detallado:', error);
    }
  };

  return (
    <div className='edit_pet_container'>
      <form className="login-form-page" onSubmit={(e) => handleEditPet(e)}>
        <h1 className="title">Edita el perfil de tu mascota</h1>
        <p>Modifica los detalles de la mascota para actualizar su perfil</p>

        <input type="text" placeholder="Animal" name="animal" value={petData.animal} onChange={handleInputChange} />
        <input type="text" placeholder="Foto animal (Link)" name="animal_photo" value={petData.animal_photo} onChange={handleInputChange} />
        <input type="text" placeholder="Nombre" name="nombre" value={petData.nombre} onChange={handleInputChange} />
        <input type="text" placeholder="Raza" name="raza" value={petData.raza} onChange={handleInputChange} />
        <input type="number" placeholder="Edad en meses" name="edad" value={petData.edad} onChange={handleInputChange} />
        <input type="text" placeholder="Género" name="genero" value={petData.genero} onChange={handleInputChange} />
        <input type="text" placeholder="Descripción" name="descripcion" value={petData.descripcion} onChange={handleInputChange} />

        <div className='caracteristicas'>
          <p>Características:</p>
          <input
            type="text"
            placeholder="Característica 1"
            name='characteristic1'
            value={petData.characteristic1}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Característica 2"
            name='characteristic2'
            value={petData.characteristic2}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Característica 3"
            name='characteristic3'
            value={petData.characteristic3}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Actualizar mascota</button>
      </form>
    </div>
  );
};

export default EditPet;
