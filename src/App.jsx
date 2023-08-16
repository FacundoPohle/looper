import './App.scss'
import NavBar from './Components/Navbar'
import Base from './Components/Base';
import Aboutus from './Components/Aboutus';
import MyProfile from './Components/MyProfile';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path='/'></Route>
         <Route path='/category' element={<Base/>}></Route>
         <Route path='/aboutus' element={<Aboutus/>}></Route>
         <Route path='/myprofile' element={<MyProfile/>}></Route>
      </Routes>
        </BrowserRouter>
  );
}

export default App;