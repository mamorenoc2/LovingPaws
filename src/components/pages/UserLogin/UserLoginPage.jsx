import React from 'react';
import { NavLink } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';
import './Login.css'

const UserLoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className='login-page-content'>
      <NavLink to={'login'}>
      <button onClick={() => console.log('Login')}>Ingresar </button>
      </NavLink>
      <NavLink to={'register'}>
      <button onClick={() => console.log('Sign In')}>Registrarse</button>
      </NavLink>
      <button onClick={() => navigate(-1)} >&larr;</button>
      </div>
    </div>
  );
}

export default UserLoginPage;