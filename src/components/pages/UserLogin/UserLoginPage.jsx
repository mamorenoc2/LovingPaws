import React from 'react';
import { NavLink } from 'react-router-dom'
import './Login.css'

const UserLoginPage = () => {
  return (
    <div className="login-page">
      <div className='login-page-content'>
      <NavLink to={'login'}>
      <button onClick={() => console.log('Login')}>Ingresar </button>
      </NavLink>
      <NavLink to={'register'}>
      <button onClick={() => console.log('Sign In')}>Registrarse</button>
      </NavLink>
      <NavLink to={'/home'}>
        <button>Regresar</button>
      </NavLink>
      </div>
     
    </div>
  );
}

export default UserLoginPage;