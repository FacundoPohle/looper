import { useGralContext } from '../../Utils/Context';
import { useState, useEffect, useRef } from "react";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import AddPlaylistSounds from './AddPlaylistSounds';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import Robot from '../Canvas/Robot';
import Typewriter from 'typewriter-effect';



function PlaylistSounds() {
    const { selectedPlaylist, removeFromPlaylist, setCurrentSample, currentSample, setCurrentAudioName, deletePlaylist, addToCart, purchasedSamples, purchasedAlert } = useGralContext();
    const [modalShow, setModalShow] = useState(false);

    // Esta función maneja la reproducción de un sample
    const handlePlaySample = (sampleData) => {
        setCurrentSample(sampleData.url); // Establece la muestra actual en el contexto
        setCurrentAudioName(sampleData.name)
    };

    // useEffect(() => {
    //     console.log('Valor actual de currentSample:', currentSample);
    // }, [currentSample]);
    // Mensajes para la animación de máquina de escribir

    const typewriterRef = useRef(null);


    useEffect(() => {
        const typewriter = typewriterRef.current;

        console.log('selectedPlaylist in useEffect:', selectedPlaylist);

        if (selectedPlaylist && selectedPlaylist.samples.length === 0) {
            typewriter
                ?.deleteAll()
                .typeString('Playlist empty, add sounds!')
                .start();
        } else if (!selectedPlaylist) {
            typewriter
                ?.deleteAll()
                .typeString('Create or select a playlist!')
                .start();
        }
    }, [selectedPlaylist]);

    const typewriterComponent = (
        <div className={`${!selectedPlaylist ? 'point__absolute--7' : 'point__absolute--5c'}`}>
            <Robot />
            <div className='titulos typewriterwidth__forprofile'>
                <Typewriter
                    options={{
                        // loop: loop,
                        autoStart: true,
                        delay: 50
                    }}
                    onInit={(typewriter) => {
                        console.log('Typewriter instance initialized:', typewriter);
                        typewriterRef.current = typewriter;

                        if (selectedPlaylist === null) {
                            typewriter.deleteAll().typeString('Create or select a playlist!').start();
                        }
                        if (selectedPlaylist && selectedPlaylist.samples.length === 0) {
                            typewriter.deleteAll().typeString('Playlist empty, add sounds!').start();
                        }
                    }}
                />
            </div>
        </div>
    );

    const Buttons = (
        <>
            <div className='d-flex flex-row justify-content-between'>
                <button className='playlist__sounds-button zindex' onClick={() => deletePlaylist()}>Delete Playlist</button>
                <button className='playlist__sounds-button zindex' onClick={() => setModalShow(true)}>Add samples</button>
            </div>
            <AddPlaylistSounds
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>
    )


    return (
        <div className="anchoscroll">
            <div className={`${!selectedPlaylist ? 'scroll2b my-2' : 'scroll2 my-2'}`}>
                {selectedPlaylist ? (
                    selectedPlaylist.samples.length > 0 ? (
                        <div className='playlist__sounds'>
                            <ul className="ps-0">
                                {selectedPlaylist.samples.map((sampleData) => (
                                    <div className="sounds__tracks" key={sampleData.id}>
                                        <li className="text-start">{sampleData.name}</li>
                                        <div className="d-flex flex-row gap-3">
                                        <Tooltip title='Remove from playlist'>
                                                <motion.div
                                                    style={{ cursor: 'pointer' }}
                                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                    onClick={() => removeFromPlaylist(sampleData.id)}
                                                ><RemoveCircleRoundedIcon />
                                                </motion.div>
                                            </Tooltip>
                                            <Tooltip title='Play'>
                                                <motion.div
                                                    style={{ cursor: 'pointer' }}
                                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                    onClick={() => handlePlaySample(sampleData)}
                                                ><PlayCircleFilledRoundedIcon />
                                                </motion.div>
                                            </Tooltip>
                                            <Tooltip title={purchasedSamples.includes(sampleData) ? 'Purchased' : 'Add to cart'}>
                                                <motion.div
                                                    style={{ cursor: 'pointer' }}
                                                    whileHover={{ rotate: 10 }}
                                                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                    onClick={purchasedSamples.includes(sampleData) ? () => purchasedAlert() : () => addToCart(sampleData)}
                                                >
                                                    {purchasedSamples.includes(sampleData) ? (
                                                        <CheckCircleIcon />
                                                    ) : (
                                                        <AddShoppingCartIcon />
                                                    )}
                                                </motion.div>
                                            </Tooltip>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        typewriterComponent

                    )
                ) : (
                    typewriterComponent
                )}
            </div>
            {selectedPlaylist && Buttons}
        </div>
    );
}


export default PlaylistSounds;
