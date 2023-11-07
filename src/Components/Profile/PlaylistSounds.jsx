import { useGralContext } from '../../Utils/Context';
import { useState, useEffect } from "react";
import AddPlaylistSounds from './AddPlaylistSounds';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";

function PlaylistSounds() {
    const { selectedPlaylist, removeFromPlaylist, setCurrentSample, currentSample, setCurrentAudioName, addToCart, removeFromFavorites } = useGralContext();

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
        <div className='myProfile__empty '>
            <div onClick={() => setModalShow(true)}>Select your playlist</div>
            <AddPlaylistSounds
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    );

    const addButton = (
        <>
            <div className='d-flex flex-row justify-content-end'>
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
                    notFoundMessage
                )}
            </div>
            {selectedPlaylist && addButton}
        </div>
    );
}


export default PlaylistSounds;
