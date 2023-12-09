import { useGralContext } from '../../Utils/Context';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import React, { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import Robot from '../Canvas/Robot';
import Typewriter from 'typewriter-effect';


function ProfileSounds() {
    const { favoriteSamples, setCurrentSample, currentSample, setCurrentAudioName, addToCart, removeFromFavorites } = useGralContext();


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
        <div className='point__absolute--5b'>
            <Robot />
            <div className='titulos typewriterwidth__forprofile'>
                <Typewriter
                    options={{
                        loop: true,
                        delay: 70
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`there aren't sounds on your profile yet! Go add some! click the button explore`)
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    );

    return (
        <div className='anchoscroll '>
            <div className='scroll my-2'>
                {favoriteSamples.length === 0 ? (
                    notFoundMessage
                ) : (
                    <>
                        <ul className='ps-0'>
                            {favoriteSamples.map(sampleData => (
                                <div className='sounds__tracks' key={sampleData.id}>
                                    <li className='text-start'>{sampleData.name}</li>
                                    <div className='d-flex flex-row gap-3'>
                                        <Tooltip title='Play'>
                                            <motion.div
                                                style={{ cursor: 'pointer' }}
                                                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                onClick={() => handlePlaySample(sampleData)}
                                            ><PlayCircleFilledRoundedIcon />
                                            </motion.div>
                                        </Tooltip>
                                        <Tooltip title='Add to cart'>
                                            <motion.div
                                                style={{ cursor: 'pointer' }}
                                                whileHover={{ rotate: 90 }}
                                                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                onClick={() => addToCart(sampleData)}
                                            ><AddCircleIcon />
                                            </motion.div>
                                        </Tooltip>
                                        <Tooltip title='Remove'>
                                            <motion.div
                                                style={{ cursor: 'pointer' }}
                                                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                onClick={() => removeFromFavorites(sampleData)}
                                            ><RemoveCircleRoundedIcon />
                                            </motion.div>
                                        </Tooltip>
                                    </div>
                                </div>
                            ))}
                        </ul></>
                )}
            </div>
        </div>
    );
}

export default ProfileSounds;
