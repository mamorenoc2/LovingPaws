import React from 'react';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="header">
      <div className='nav'>
        <NavLink to={isAuthenticated ? '/home' : '/landing_page'} > 
          <div className="icon-container activeh">
            <span className="icon-m">
                <FontAwesomeIcon icon={faHome} />
            </span>
            {'Home'}
          </div>
        </NavLink>
        <NavLink to={'petsList'}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='desk-header icon-m'>
              {'Mascotas'}
            </span>
          </div>
        </NavLink>
        <NavLink to={'favorite_pets'}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faHeart} />
            <span className='desk-header icon-m'>
              {'Favoritos'}
            </span>
          </div>
        </NavLink>
        <NavLink to={isAuthenticated ? '/user_page' : '/user_login'}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUser} />          
            <span className='desk-header icon-m'>
              {'Usuario'}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Header;