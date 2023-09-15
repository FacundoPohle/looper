import { useGralContext } from '../Utils/Context';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import React, { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion"

function AllSounds() {
    const { filteredSamples, setCurrentSample, currentSample, setCurrentAudioName, addToCart } = useGralContext();


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
        <p className="not-found">Not Found</p>
    );

    return (
        <div className='w-100'>
            <div className='scroll my-2'>
                {filteredSamples.length === 0 ? (
                    notFoundMessage
                ) : (
                    <ul className='ps-0'>
                        {filteredSamples.map(sampleData => (
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
