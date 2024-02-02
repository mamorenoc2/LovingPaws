import React from 'react'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
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

  const handleEmailLogin = (e) => {
    try {
      e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password).then(data=>{
      console.log(data, 'auth')
      navigate('/home');
    });
    } catch (error) {
      alert(error)
      console.error('Error al iniciar sesión', error.message);
    }
    
  }

  return (
    <form className="login-form-page" onSubmit={(e) => handleEmailLogin(e)}>
      <h1 className='title'>Ingresa a Loving paws</h1>
      <input type="email" placeholder="Email" name='email' />
      <input type="password" placeholder="Password" name='password'/>
      <button type="submit">Ingresar</button>
      <button onClick={handleGoogleLogin}>
        <span className='icon'>
        <FontAwesomeIcon icon={faGoogle} />
        </span>
      Ingresa con Google</button>
      <NavLink to={'/user_login'}>
        <button>Regresar</button>
      </NavLink>
    </form>
  );
}

export default Login