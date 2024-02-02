import React from 'react'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      console.error('Error al  registrarse con Google', error.message);
    }
  };

  const handleEmailRegister = async (e) => {
    try {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value;
      const direccion = e.target.direccion.value;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {

        await updateProfile(user, {
          displayName: e.target.name.value,
        });
        const userDocRef = await addDoc(collection(db, 'dueños'), {
          uid: user.uid,
          name:name,
          direccion: direccion,
          correo:email,
        });
        navigate('/home');
      } else {
        console.error('Error al obtener información del usuario después del registro');
      }
    } catch (error) {
      console.error('Error al registrarse', error.message);
    }
    
  }

    return (
        <form className="login-form-page" onSubmit={(e) => handleEmailRegister(e)}>
          <h1 className='title'>Registrate a Loving paws</h1>
          <input type="text" placeholder="Nombre"  name='name'/>
          <input type="email" placeholder="Correo" name='email' />
          <input type="password" placeholder="Contraseña" name='password' />
          <input type="text" placeholder="Direccion"  name='direccion'/>
          <button  type="submit">Registrarse</button>
          <button onClick={handleGoogleLogin}>
          <span className='icon'>
            <FontAwesomeIcon icon={faGoogle} />
            </span>
            Registrarse con Google
          </button>
          <button onClick={() => navigate(-1)} >&larr;</button>

        </form>
      );
}

export default Register