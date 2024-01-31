import React from 'react'
import Perro1 from '../../../assets/img/dog-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const PetsDescription = () => {
  return (
    <div className='petDescription'>
        <div className='pet__container'>
        <div className='pet__img-container'>
          <img src={Perro1} alt="" />
        </div>
        <div className='pet__info-container'>
          <div className='pet__info-content'>
            <div className='pet__info-name'>
              <h2>Rocky</h2>
            </div>
            <div className='pet__info-like'>
              <FontAwesomeIcon icon={faHeart}/>
            </div>
          </div>
          <div className='pet__info-content'>
            <p>Rottweiler</p>
            <p>3 meses</p>
          </div>
          <h5>Personalidad</h5>
          <div className='pet__info-content'>
            <div className='pet__feacture'>
              <p>cariñoso</p>
            </div>
            <div className='pet__feacture'>
            <p>cariñoso</p>
            </div>
            <div className='pet__feacture'>
            <p>cariñoso</p>
            </div>
          </div>
          <h5>Historia de Rocky</h5>
          <div className='pet__info-content'>
            <p>Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.</p>
          </div>
          <div className='pet__info-content'>
            <div className='user_space'>
            <div className='pet__info-content'>
              <p>publicado por:</p>
              <p>maria dolores</p>
            </div>
            </div>
            <button>Contactar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetsDescription