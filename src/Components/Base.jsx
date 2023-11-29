import AllSounds from "./AllSounds";
import { useGralContext } from '../Utils/Context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AcordeonFilter from "./Acordeon";
import { motion } from "framer-motion";
import RobotCanvas from './Canvas/Robot'
// import PlanetaryCanvas from "./Canvas/Planet";
import IonCanvas from "./Canvas/Ion";
import PlanetaryCanvas from "./Canvas/Planet";





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
                        <PlanetaryCanvas />
                        <p className='titulos fs-5 planetarytext1'>There is</p>
                        <p className='titulos fs-5 planetarytext2'>a world of sounds</p>
                        <p className='titulos fs-5 planetarytext3'>for you</p>

                    </div>

                    <Offcanvas backdrop={true} className='filterMenu__canvas' show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className=" ms-4 mt-1 subtitulos">FILTER YOUR SAMPLES</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='filterMenu__canvas-body'>
                            <AcordeonFilter />
                        </Offcanvas.Body>
                    </Offcanvas>
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className="sounds__samples point">
                            <div className="sounds__buttons2">
                                <p className="playlist__title titulos fs-6 text-start pt-1 w-100 ">{filterNames ? <p><span className="playlist__title2 ps-0">Filters: </span> {filterNames}</p> : <p><span className="playlist__title2 ps-0">These are </span>All the sounds</p>}</p>
                                <div className="sounds__buttons">
                                    <Button variant='dark' onClick={toggleShow}>
                                        FILTERS
                                    </Button>
                                    <Button variant='dark' onClick={handleResetFilters}>RESET FILTERS</Button> {/* Botón para restablecer los filtros */}
                                    {/* Resto de tu interfaz */}
                                </div>
                            </div>

                            <AllSounds />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>



    );
}

export default Base;
