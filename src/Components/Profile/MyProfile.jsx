import Filters from "./FiltersMenu";
import { color, motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import ProfileSounds from "./ProfileSounds";
import { Link } from "react-router-dom";
import { useGralContext } from '../../Utils/Context';


const MyProfile = () => {
    const { favoriteSamples } = useGralContext();

    return (

        <>
            <div className="myProfile {
">
                {/* <motion.div className="containerr" ref={constraintsRef}>
                        <motion.div className="iteme"
                        drag
                        dragConstraints={constraintsRef}
                        />
                    </motion.div> */}
                <div className="myProfile__sounds ">
                    <Filters />
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
                            {favoriteSamples.length === 0 ?
                                <div className="sounds__buttons">
                                    <Button variant='dark' ><Link className="Links" to="/tienda">Go Explore</Link></Button>
                                </div> :
                                <div className="d-flex flex-row justify-content-between w-100">
                                    <p >These are your favorites samples</p>
                                    <Button variant='dark' ><Link className="Links" to="/tienda">Go Explore</Link></Button>
                                </div>}
                            <ProfileSounds />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );

}

export default MyProfile;
