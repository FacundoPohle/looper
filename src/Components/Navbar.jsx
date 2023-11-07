import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import Login from './Login';
import { useState } from "react";


function NavBar() {

  const [modalShow, setModalShow] = useState(false);


  return (
    <Navbar fixed='top' className="navbar">
      <Container fluid>
        <div className='d-flex flex-row justify-content-start'>
          <Link className='Links ntitle fromLeft' to="/tienda">Tienda</Link>

          <Link className='Links ntitle fromLeft' to='/myprofile'>My profile</Link>
        </div>

        <div className='d-flex flex-row justify-content-end'>
          <div className='Links ntitle2 login text-end' onClick={() => setModalShow(true)}>
        Login
          </div>
            <Login
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          <Link className='Links ntitle' to="/cart"><CartWidget /></Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;