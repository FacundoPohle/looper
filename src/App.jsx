import './App.scss';
import NavBar from './Components/Navbar';
import Tienda from './Components/Tienda';
import Cart from './Components/Cart';
import WaveSurfer from "./Components/Wavesurfer/WavePlayer";
import { ContextProvider } from './Utils/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfle from './Components/Profile/MyProfile';
import Welcome from './Components/Welcome';
import Downloads from './Components/Profile/Downloads';
import Collection from './Components/Profile/Collection';
import PlaylistSearcher from './Components/Profile/PlaylistSearcher';
import GiftCards from './Components/Profile/GiftCards';

const App = () => {
  
  return (
    <ContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/tienda' element={<Tienda />}></Route>
        <Route path='/myprofile' element={<MyProfle />}></Route>
        <Route path='/playlist' element={<PlaylistSearcher />}></Route>
        <Route path='/giftcards' element={<GiftCards />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/downloads' element={<Downloads />}></Route> 
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
        <WaveSurfer />
    </BrowserRouter>
    </ContextProvider>
     );
      
}

export default App;