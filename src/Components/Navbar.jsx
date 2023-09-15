import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {


  return (
    <Navbar fixed='top' expand="lg" className="navbar">
      <Container fluid>
        <div className='d-flex flex-row justify-content-start'>
          <Link className='Links ntitle fromLeft' to="/tienda">Tienda</Link>

          <Link className='Links ntitle fromLeft' to='/aboutus'>About us</Link>
        </div>

        <Link className='Links ntitle' to="/cart"><CartWidget /></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;