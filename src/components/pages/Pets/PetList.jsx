import React from 'react'

import './Pets.css'
import logoPerro from '../../../assets/img/dog-1.jpg'
import Perro1 from '../../../assets/img/dog-3.jpg'
import Perro2 from '../../../assets/img/dog-4.jpg'
import Perro3 from '../../../assets/img/dog-5.jpg'
import Perro4 from '../../../assets/img/dog-6.jpg'
import { getData } from '../../../store/mascotas/mascotas_db'
import logoGato from '../../../assets/img/dog-2.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const PetList = () => {
    const [isDogChecked, setIsDogChecked] = useState(false);
    const [isCatChecked, setIsCatChecked] = useState(false);

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const data = await getData();
          setData(data);
        };
      
        fetchData();
      }, [setData]);
      
      let filteredData = data;
    if (isDogChecked && !isCatChecked) {
    filteredData = filteredData.filter(item => item.animal === 'Perro');
    } else if (!isDogChecked && isCatChecked) {
    filteredData = filteredData.filter(item => item.animal === 'Gato');
    }

  return (
    <div className='pets_home'>
        <div className='pets_home-container'>
        <h1 className='title'>Adopta una adorable mascota</h1>
        <div className="pets">
            <h4 className='subtitle'>categoría de mascotas</h4>
            <div className="pets__buttons-group">
                <label>
                    <input type="checkbox" className="pets__checkbox" onChange={e => setIsDogChecked(e.target.checked)} />
                    <div className="pets__buttons">
                    <div className="pets__buttons-logo">
                        <img src={logoPerro} alt="" />
                    </div>
                    <div className='pets__buttons-category'>
                        <p>Perros</p>
                    </div>
                    </div>
                </label>
                <label>
                <input type="checkbox" className="pets__checkbox" onChange={e => setIsCatChecked(e.target.checked)} />
                    <div className="pets__buttons">
                    <div className="pets__buttons-logo">
                        <img src={logoGato} alt="" />
                    </div>
                    <div className='pets__buttons-category'>
                        <p>Gatos</p>
                    </div>
                    </div>
                </label>
            </div>
            
            <div className="pets__panel">
                {filteredData.map((item, index) => (
                    <NavLink key={index} to={`petDescription/${item.id}`}>
                    <div className="pets__card">
                        <img src={item.animal_photo} alt="" />
                        <p className="pet-name">{item.nombre} <br /> {item.raza}</p>
                    </div>
                    </NavLink>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default PetList

