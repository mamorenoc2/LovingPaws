import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { db } from '../../../../firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const MyPets = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        if (currentUser) {
          const petsQuery = query(collection(db, 'mascotas'), where('user_id', '==', currentUser.uid));
          const petsSnapshot = await getDocs(petsQuery);

          const petsData = petsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          setPets(petsData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener mascotas:', error);
      }
    };

    fetchPets();
  }, [currentUser]);

  const handleDeletePet = async (petId) => {
    try {
      await deleteDoc(doc(db, 'mascotas', petId));

      // Actualizar el estado para reflejar el cambio
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== petId));
    } catch (error) {
      console.error('Error al eliminar mascota:', error);
    }
  };

  if (loading) {
    return <p>Cargando mascotas...</p>;
  }

  return (
    <div className='pets_home'>
      <div className='pets_home-container'>
        <h1 className='title'>Mis mascotas</h1>
        <NavLink to={'create_pet'}>
          <button>Crear mascota</button>
        </NavLink>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.nombre}</td>
                <td>
                  <button onClick={() => handleDeletePet(pet.id)}>Eliminar</button>
                  <NavLink to={`edit_pet/${pet.id}`}>
                  <button>Editar</button>
                  </NavLink>
                  
                  {/* Agrega aquí el botón de editar con la lógica correspondiente */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPets;
