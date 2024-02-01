import AllSounds from "./AllSounds";
import { useGralContext } from '../Utils/Context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AcordeonFilter from "./Acordeon";
import { motion } from "framer-motion";
import PlanetaryCanvas from "./Canvas/Planet";
import { AnimatedTitle } from "./Animations/Lines";
import { Link } from "react-router-dom";


// Animacion filtros

const Base = () => {

    const { show, handleClose, toggleShow, handleResetFilters, filterNames } = useGralContext();



    // const constraintsRef = useRef(null)

    return (
        <div>
            <div className="Base">
                {/* <motion.div className="containerr" ref={constraintsRef}>
                        <motion.div className="iteme"
                        drag
                        dragConstraints={constraintsRef}
                        />
                    </motion.div> */}
                <div className="sounds point">
                    {/* <Filters/> */}
                    <div className='point__absolute'>
                        <AnimatedTitle title='LOOPER' />
                        <PlanetaryCanvas />
                        <Link className="Links" to='/giftcards'><div className="cardbait carbaitanimation">BUY NOW YOUR DISCOUNT TICKETS</div></Link>
                        {/* <AnimatedTitleSm title='world of sounds'/>
                        <p className='titulos planetarytext1'>There is</p>
                        <p className='titulos planetarytext2'>a world of sounds</p>
                        <p className='titulos planetarytext3'>for you</p> */}
                    </div>

                    <Offcanvas backdrop={true} className='filterMenu__canvas' show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className=" ms-4 mt-1 subtitulos">FILTER YOUR SAMPLES</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='filterMenu__canvas-body'>
                            <AcordeonFilter />
                        </Offcanvas.Body>
                    </Offcanvas>
                        <div className="sounds__samples point">
                            <div className="sounds__buttons2">
                                <p className="playlist__title ps-0 fs-6 titulos pt-1 mb-1 ">{filterNames ? <p className='ps-0'><span className="playlist__title2  ps-0">Filters: </span> {filterNames}</p> : <p className='ps-0'><span className="playlist__title2 ps-0">These are </span>All the sounds</p>}</p>
                                <div className="sounds__buttons">
                                    <Button variant='dark' onClick={toggleShow}>
                                        FILTERS
                                    </Button>
                                    <Button variant='dark' onClick={handleResetFilters}>RESET</Button> {/* Botón para restablecer los filtros */}
                                    {/* Resto de tu interfaz */}
                                </div>
                            </div>
                            <AllSounds />
                        </div>
                </div>
            </div>
        </div>



    );
}

export default Base;
