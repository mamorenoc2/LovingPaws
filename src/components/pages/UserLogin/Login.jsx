import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase/firebase'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log('Inicio de sesión con Google exitoso');

      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error.message);
    }
  };
  return (
    <div className="login-form-page">
      <h1 className='title'>Ingresa a Pets Lovers</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={() => console.log('Login')}>Ingresar</button>
      <button onClick={handleGoogleLogin}>
        <span className='icon'>
        <FontAwesomeIcon icon={faGoogle} />
        </span>
      Ingresa con Google</button>
      <NavLink to={'/user_login'}>
        <button>Regresar</button>
      </NavLink>
    </div>
  );
}

export default Login