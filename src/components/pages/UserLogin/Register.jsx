import React from 'react'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase'
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
      console.log('Inicio de sesión con Google exitoso');

      navigate('/home');
    } catch (error) {
      console.error('Error al  registrarse con Google', error.message);
    }
  };

  const handleEmailRegister = (e) => {
    try {
      e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password).then(data=>{
      console.log(data, 'auth');
      navigate('/home');
    });
    } catch (error) {
      console.error('Error al registrarse', error.message);
    }
    
  }

    return (
        <form className="login-form-page" onSubmit={(e) => handleEmailRegister(e)}>
          <h1 className='title'>Registrate a Loving paws</h1>
          {/* <input type="text" placeholder="Nombre"  name='name'/> */}
          <input type="email" placeholder="Correo" name='email' />
          <input type="password" placeholder="Contraseña" name='password' />
          <button  type="submit">Registrarse</button>
          <button onClick={handleGoogleLogin}>
          <span className='icon'>
            <FontAwesomeIcon icon={faGoogle} />
            </span>
            Registrarse con Google
          </button>
          <NavLink to={'/user_login'}>
            <button >Regresar</button>
          </NavLink>

        </form>
      );
}

export default Register