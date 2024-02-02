import React from 'react'

import landingPageImg from '../../../../assets/img/dog-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing'>
        <div className='landing__container container grid'>
            <div className='landing_img-container'>
            <img src={landingPageImg} alt="" className='landing__img'/>
            </div>
       
        </div>
        <div className='landing__data'>
            <h2 className='title'>Las mejores mascotas en <br /> LovingPaws</h2>
            <NavLink to={'/petsList'}>
                <button>Ver mascotas </button>
            </NavLink>
        </div>
        <div className="landing__container_steps">
            <h2 className='landing__container_title'>Como adoptar a tu nueva mascota</h2>
            <div className="steps__card">
                        <h3 className="steps__card-title">Mira a tu nueva mascota</h3>
                        <ul className='steps__card_list'>
                            <li>Observa el tipo de mascota que captura tu corazón, ya sea un adorable perro o un encantador gato.</li>
                            <li>Descubre el nombre único que define a tu futura compañía de cuatro patas.</li>
                            <li>Conoce la raza de tu mascota para entender más sobre sus características distintivas.</li>
                        </ul>
                    </div>
                    <div className="steps__card">
                        <h3 className="steps__card-title">Mira sus caracteristicas</h3>
                        <ul className='steps__card_list'>
                            <li>Explora las características especiales que hacen que cada mascota sea única y especial.</li>
                            <li>Admira sus fotos detalladas para capturar su esencia y personalidad.</li>
                            <li>Sumérgete en la información detallada sobre su comportamiento y necesidades para asegurarte de que se adapte perfectamente a tu vida..</li>
                        </ul>
                    </div>
                    <div className="steps__card">
                        <h3 className="steps__card-title">Contacta al dueño</h3>
                        <ul className='steps__card_list'>
                            <li>Encuentra al dueño de la mascota que ha capturado tu atención en la parte inferior.</li>
                            <li>Utiliza la información de contacto proporcionada para hacer cualquier pregunta adicional o coordinar una visita.</li>
                            <li>Prepárate para dar la bienvenida a un nuevo amigo peludo a tu vida.</li>
                        </ul>
                    </div>
        </div>
    </div>
  )
}

export default LandingPage