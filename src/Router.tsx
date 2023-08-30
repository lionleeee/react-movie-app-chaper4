
import { FC } from 'react';
import {  Route, Routes, useLocation, useParams } from 'react-router-dom';
import ScreenHeader from "./components/Header/ScreenHeader";
import HomeContainer from './screens/HomeScreen';
import MovieContainer from 'screens/HomeScreen/MovieScreen';


const Router : FC = (props) => {
  const location = useLocation(); 
  const { pathname } = location;
  const params = useParams();
  return (
    <div>
      <ScreenHeader pathname={pathname} />
      <Routes>
        <Route path="/" Component={HomeContainer}></Route>
        <Route path="/movie/*" Component={MovieContainer}></Route>
        </Routes>
        
      </div>
  )
  
}
export default Router;

