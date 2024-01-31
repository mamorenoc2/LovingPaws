import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      <div className='nav'>
        <NavLink to={'/home'} > 
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
              {'Pets'}
            </span>
          </div>
        </NavLink>
        <NavLink to={'favorite_pets'}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faHeart} />
            <span className='desk-header icon-m'>
              {'Favorites'}
            </span>
          </div>
        </NavLink>
        <NavLink to={'user_login'}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUser} />          
            <span className='desk-header icon-m'>
              {'User'}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Header;