import { useGralContext } from '../../Utils/Context';
import { useState, useEffect } from "react";
import AddPlaylistSounds from './AddPlaylistSounds';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import Robot from '../Canvas/Robot';
import Typewriter from 'typewriter-effect';


function PlaylistSounds() {
    const { selectedPlaylist, removeFromPlaylist, setCurrentSample, currentSample, setCurrentAudioName, deletePlaylist, addToCart, removeFromFavorites } = useGralContext();

    const [modalShow, setModalShow] = useState(false);

    // Esta función maneja la reproducción de un sample
    const handlePlaySample = (sampleData) => {
        setCurrentSample(sampleData.url); // Establece la muestra actual en el contexto
        setCurrentAudioName(sampleData.name)
    };

    useEffect(() => {
        console.log('Valor actual de currentSample:', currentSample);
    }, [currentSample]);

    // Mensaje a mostrar cuando no se encuentran resultados
    const notFoundMessage = (
        <div className='point__absolute--7'>
            <Robot />
            <div className='titulos typewriterwidth__forprofile'>
                <Typewriter
                    options={{
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`Create or select a playlist!`)
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    );

    const notFoundMessage2 = (
        <div className='point__absolute--5c'>
            <Robot />
            <div className='titulos typewriterwidth__forprofile'>
                <Typewriter
                    options={{
                        loop: true,
                        delay: 70
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`Playlist empty, add some sounds!`)
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    );

    const Buttons = (
        <>
            <div className='d-flex flex-row justify-content-between'>
                <button className='playlist__sounds-button' onClick={() => deletePlaylist()}>Delete Playlist</button>
                <button className='playlist__sounds-button' onClick={() => setModalShow(true)}>Add samples</button>
            </div>
            <AddPlaylistSounds
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>
    )



    return (
        <div className="anchoscroll">
        <div className="scroll2 my-2">
            {selectedPlaylist ? (
                selectedPlaylist.samples.length > 0 ? (
                    <div className='playlist__sounds'>
                        <ul className="ps-0">
                            {selectedPlaylist.samples.map((sampleData) => (
                                <div className="sounds__tracks" key={sampleData.id}>
                                    <li className="text-start">{sampleData.name}</li>
                                    <div className="d-flex flex-row gap-3">
                                        <Tooltip title='Remove'>
                                            <motion.div
                                                style={{ cursor: 'pointer' }}
                                                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                onClick={() => removeFromPlaylist(sampleData.id)}
                                            ><RemoveCircleRoundedIcon />
                                            </motion.div>
                                        </Tooltip>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                ) : (
                    notFoundMessage2
                )
            ) : (
                notFoundMessage
            )}
        </div>
        {selectedPlaylist && Buttons}
    </div>
        // <div className="anchoscroll">
        //     <div className="scroll2 my-2">
        //         {selectedPlaylist ? (
        //             <div className='playlist__sounds'>
        //                 <ul className="ps-0">
        //                     {selectedPlaylist.samples.map((sampleData) => (
        //                         <div className="sounds__tracks" key={sampleData.id}>
        //                             <li className="text-start">{sampleData.name}</li>
        //                             <div className="d-flex flex-row gap-3">
        //                                 <Tooltip title='Remove'>
        //                                     <motion.div
        //                                         style={{ cursor: 'pointer' }}
        //                                         whileTap={{ scale: 0.8, borderRadius: "100%" }}
        //                                         onClick={() => removeFromPlaylist(sampleData.id)}
        //                                     ><RemoveCircleRoundedIcon />
        //                                     </motion.div>
        //                                 </Tooltip>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </ul>

        //             </div>
        //         ) : (
        //             notFoundMessage
        //         )}
        //     </div>
        //     {selectedPlaylist && Buttons}
        // </div>
    );
}


export default PlaylistSounds;
