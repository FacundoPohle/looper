import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import Login from './Login';
import { useState } from "react";
import ColorPicker from './ColorPicker';
import { motion } from "framer-motion"

function NavBar() {

  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState("navbar__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "navbar__menu") {
      setActive("navbar__menu nav__active");
    } else setActive("navbar__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


  return (
    <Navbar fixed='top' className="navbar">
      <Container fluid className='d-flex justify-content-end'>
        <div className={active}>
          <div className='navbar__storeprofile'>
            <Link className='Links ntitle fromLeft' to="/tienda">Store</Link>

            <Link className='Links ntitlee fromLeft' to='/myprofile'>My profile</Link>
          </div>

          <div className='navbar__logincart'>
            <div className='Links ntitle2 login text-end' onClick={() => setModalShow(true)}>
              Login
            </div>
            <Login
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Link className='Links ntitle ntitle__cart' to="/cart">
                <CartWidget />
            </Link>
            <ColorPicker/>
          </div>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;