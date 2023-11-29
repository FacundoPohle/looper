import Button from 'react-bootstrap/Button';
import PlaylistSounds from "./PlaylistSounds";
import { Link } from "react-router-dom";
import FiltersPlaylist from "./FilteredPlaylist";
import { useGralContext } from '../../Utils/Context';

const PlaylistSearcher = () => {

    const { selectedPlaylist } = useGralContext();


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
                        <div className="sounds__samples">
                            <div className="sounds__buttons2">
                                <p className="playlist__title titulos mt-2 fs-6">{selectedPlaylist && <p><span className='playlist__title2'>Playlist: </span>{selectedPlaylist.name}</p>}</p>
                                <div className="sounds__buttons">
                                    <Button variant='dark' ><Link className="Links" to="/myprofile">GO MY PROFILE</Link></Button>
                                    <Button variant='dark' ><Link className="Links" to="/tienda">GO EXPLORE</Link></Button>
                                </div>
                            </div>
                            <PlaylistSounds />
                        </div>
                </div>
            </div>
        </>
    );

}

export default PlaylistSearcher;
