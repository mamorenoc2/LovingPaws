import React from 'react'
import './UserSection.css'
import { auth } from '../../../../firebase/firebase'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const UserPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(val=> {
            navigate('/landing_page');
        });
    }
    return (
        <div className="login-page">
            <div className='login-page-content'>
            <h2>Hola!</h2>
                <NavLink to={'/my_pets'}>
                    <button>Mis mascotas</button>
                </NavLink>
                    <button onClick={handleLogout}>cerrar sección</button>
                <NavLink to={'/home'}>
                    <button>Regresar a mascotas adoptadas</button>
                </NavLink>
            </div>
        </div>
    )
}

export default UserPage