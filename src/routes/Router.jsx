import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/pages/Home/Home'
import Pets from '../components/pages/Pets/Pets'
import Login from '../components/pages/UserLogin/Login'
import Singup from '../components/pages/SignUp'
import Adoption from '../components/pages/Adoption'
import PetsDescription from '../components/pages/Pets/PetsDescription'
import PetsList from '../components/pages/Pets/PetList'
import UserLoginPage from '../components/pages/UserLogin/UserLoginPage'
import Register from '../components/pages/UserLogin/Register'
import LandingPage from '../components/pages/Home/Landing Page/LandingPage'
import FavoritePets from '../components/pages/Pets/FavoritePets'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='landing_page' element={<LandingPage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='pets' element={<Pets/>}/>
        <Route path='user_login/login' element={<Login/>}/>
        <Route path='user_login/register' element={<Register/>}/>
        <Route path='user_login' element={<UserLoginPage/>}/>
        <Route path='singup' element={<Singup/>}/>
        <Route path='adoption' element={<Adoption/>}/>
        <Route path='petsList/petDescription' element={<PetsDescription/>}/>
        <Route path='petsList' element={<PetsList/>}/>
        <Route path='favorite_pets' element={<FavoritePets/>}/>
    </Routes>
};

export default Routers