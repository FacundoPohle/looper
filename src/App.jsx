import './App.scss';
import NavBar from './Components/Navbar';
import Tienda from './Components/Tienda';
import WaveSurfer from "./Components/WavePlayer"
import Cart from './Components/Cart';
import { ContextProvider } from './Utils/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Desplegable } from './Components/Desplegable';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
      <NavBar />
      <Desplegable/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/tienda' element={<Tienda />}></Route>
        <Route path='/aboutus' element={<WaveSurfer />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
     );
      
}

export default App;