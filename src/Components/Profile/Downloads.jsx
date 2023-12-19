import Filters from "./FiltersMenu";
import Button from 'react-bootstrap/Button';
import DownloadSounds from "./DownloadSounds";
import { Link } from "react-router-dom";
import { useGralContext } from '../../Utils/Context';


const Downloads = () => {
    const { downloadedSamples } = useGralContext();

    return (

        <>
            <div className="myProfile ">
                {/* <motion.div className="containerr" ref={constraintsRef}>
                        <motion.div className="iteme"
                        drag
                        dragConstraints={constraintsRef}
                        />
                    </motion.div> */}
                <div className="myProfile__sounds ">
                    <Filters />
                        <div className="sounds__samples point">
                            {downloadedSamples.length === 0 ?
                                <div className="sounds__buttons">
                                    <Button className="zindex" variant='dark' ><Link className="Links subtitulos fs-6" to="/tienda">EXPLORE</Link></Button>
                                </div> :
                                <div className="d-flex flex-row justify-content-between gap-5 w-100">
                                    <p className="titulos notmob fs-6">These are your downloads samples</p>
                                    <p className="titulos mob mb-3">Your downloads samples</p>
                                    <div className="sounds__buttons">
                                    <Button variant='dark' ><Link className="Links subtitulos fs-6" to="/tienda">EXPLORE</Link></Button>
                                    </div>
                                </div>}
                            <DownloadSounds />
                        </div>
                </div>
            </div>
        </>
    );

}

export default Downloads;
