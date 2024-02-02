import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/pages/Home/Home'
import Pets from '../components/pages/Pets/Pets'
import Login from '../components/pages/UserLogin/Login'
import Adoption from '../components/pages/Adoption'
import PetsDescription from '../components/pages/Pets/PetsDescription'
import PetsList from '../components/pages/Pets/PetList'
import UserLoginPage from '../components/pages/UserLogin/UserLoginPage'
import Register from '../components/pages/UserLogin/Register'
import LandingPage from '../components/pages/Home/Landing Page/LandingPage'
import FavoritePets from '../components/pages/Pets/FavoritePets'
import UserPage from '../components/pages/Home/User/UserPage'
import EjemploMacotas from '../store/mascotas/ejemploMascotas'
import MyPets from '../components/pages/Home/User/MyPets'
import CreatePets from '../components/pages/Home/User/CreatePets'
import EditPet from '../components/pages/Home/User/EditPet'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='landing_page'/>}/>
        <Route path='landing_page' element={<LandingPage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='pets' element={<Pets/>}/>
        <Route path='user_page' element={<UserPage/>}/>
        <Route path='user_login/login' element={<Login/>}/>
        <Route path='user_login/register' element={<Register/>}/>
        <Route path='user_login' element={<UserLoginPage/>}/>
        <Route path='adoption' element={<Adoption/>}/>
        <Route path='petsList/petDescription/:id' element={<PetsDescription/>}/>
        <Route path='petsList' element={<PetsList/>}/>
        <Route path='my_pets' element={<MyPets/>}/>
        <Route path='my_pets/create_pet' element={<CreatePets/>}/>
        <Route path='my_pets/edit_pet/:id' element={<EditPet/>}/>
        <Route path='favorite_pets' element={<FavoritePets/>}/>
        <Route path='ejemplo_mascotas' element={<EjemploMacotas/>}/>
    </Routes>
};

export default Routers