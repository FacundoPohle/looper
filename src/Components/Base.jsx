import AllSounds from "./AllSounds";
import WaveSurfer from "./WavePlayer";
import { useGralContext } from '../Utils/Context';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AcordeonFilter from "./Acordeon";
import Filters from "./FiltersMenu";
import { motion } from "framer-motion";




// Animacion filtros



const Base = () => {

    const { show, handleClose, toggleShow, handleResetFilters } = useGralContext();

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
                <div className="sounds">
                    <Filters />

                    <Offcanvas backdrop={false} className='filterMenu__canvas' show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="fromleft ms-4 ">Filter your samples</Offcanvas.Title>
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
                        <div className="sounds__samples">
                            <div className="sounds__buttons">
                                <Button variant='dark' onClick={toggleShow} className='filterMenu'>
                                    Filters
                                </Button>
                                <Button variant='dark' onClick={handleResetFilters}>Reset Filters</Button> {/* Botón para restablecer los filtros */}
                                {/* Resto de tu interfaz */}
                            </div>
                            <AllSounds />
                        </div>
                    </motion.div>
                </div>
            </div>
            <WaveSurfer />
        </div>



    );
}

export default Base;
