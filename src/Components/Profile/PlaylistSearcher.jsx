import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import PlaylistSounds from "./PlaylistSounds";
import { Link } from "react-router-dom";
import FiltersPlaylist from "./FilteredPlaylist";


const PlaylistSearcher = () => {


    return (

        <>
            <div className="myProfile">
                {/* <motion.div className="containerr" ref={constraintsRef}>
                        <motion.div className="iteme"
                        drag
                        dragConstraints={constraintsRef}
                        />
                    </motion.div> */}
                <div className="myProfile__sounds ">
                    <FiltersPlaylist />
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
                                <Button variant='dark' ><Link className="Links" to="/myprofile">Go my profile</Link></Button>
                                <Button variant='dark' ><Link className="Links" to="/tienda">Go Explore</Link></Button>
                            </div>
                            <PlaylistSounds />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );

}

export default PlaylistSearcher;
