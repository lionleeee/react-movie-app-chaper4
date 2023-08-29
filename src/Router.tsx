
import { FC } from 'react';
import {  Route, Routes, useLocation, useParams } from 'react-router-dom';
import ScreenHeader from "./components/Header/ScreenHeader";
import HomeContainer from './screens/HomeScreen';


const Router : FC = (props) => {
  const location = useLocation(); 
  const { pathname } = location;
  const params = useParams();
  return (
    <div>
      <ScreenHeader pathname={pathname} />
      <Routes>
        <Route path="/" Component={HomeContainer}></Route>
        </Routes>
        
      </div>
  )
  
}
export default Router;

