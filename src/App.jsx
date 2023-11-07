import './App.scss';
import NavBar from './Components/Navbar';
import Tienda from './Components/Tienda';
import Cart from './Components/Cart';
import WaveSurfer from "./Components/Wavesurfer/WavePlayer";
import { ContextProvider } from './Utils/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Desplegable } from './Components/Profile/Desplegable';
import MyProfle from './Components/Profile/MyProfile';
import PlaylistSearcher from './Components/Profile/PlaylistSearcher';
import RobotCanvas from './Components/Canvas/Robot';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
      <NavBar />
      <Desplegable/>
      <Routes>
        <Route path='/' element={<div className='point__absolute--2'><RobotCanvas/></div>}></Route>
        <Route path='/tienda' element={<Tienda />}></Route>
        <Route path='/myprofile' element={<MyProfle />}></Route>
        <Route path='/playlist' element={<PlaylistSearcher />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <WaveSurfer />
    </BrowserRouter>
    </ContextProvider>
     );
      
}

export default App;