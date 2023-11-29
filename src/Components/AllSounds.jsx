import { useGralContext } from '../Utils/Context';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import React, { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion"
import Robot from './Canvas/Robot'


function AllSounds() {
    const { filteredSamples, setCurrentSample, currentSample, setCurrentAudioName, addToCart, addToFavorites } = useGralContext();


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
            <div className='point__absolute--5'>
                <Robot/>
                <p className='titulos fs-6 errorfound'>Something is missing</p>
                <p className='titulos fs-6 errorfound1'>Try reseting filters</p>
            </div>
    );

    return (
        <div className='anchoscroll'>
            <div className='scroll my-2'>
                {filteredSamples.length === 0 ? (
                    notFoundMessage
                ) : (
                    <ul className='ps-0'>
                        {filteredSamples.map(sampleData => (
                            <div className='sounds__tracks' key={sampleData.id}>
                                <li className='text-start'>{sampleData.name}</li>
                                <div className='d-flex flex-row gap-3'>
                                    <Tooltip title='Add to my profile'>
                                        <motion.div
                                            style={{ cursor: 'pointer' }}
                                            whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                            onClick={() => addToFavorites(sampleData)}
                                        ><FavoriteRoundedIcon />
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
                                    <Tooltip title='Add to cart'>
                                        <motion.div
                                            style={{ cursor: 'pointer' }}
                                            whileHover={{ rotate: 90 }}
                                            whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                            onClick={() => addToCart(sampleData)}
                                        ><AddCircleIcon />
                                        </motion.div>
                                    </Tooltip>
                                </div>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AllSounds;
