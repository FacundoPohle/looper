import { useGralContext } from '../../Utils/Context';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import React, { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion";
import Robot from '../Canvas/Robot';
import Typewriter from 'typewriter-effect';


function CollectionSounds() {
    const {  setCurrentSample, currentSample, setCurrentAudioName, purchasedSamples, download } = useGralContext();


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
                        typewriter.typeString(`Buy some sounds from the store first!`)
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
                {purchasedSamples.length === 0 ? (
                    notFoundMessage
                ) : (
                    <>
                        <ul className='ps-0'>
                            {purchasedSamples.map(sampleData => (
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
                                        <Tooltip title='Download'>
                                            <motion.div
                                                style={{ cursor: 'pointer' }}
                                                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                                                onClick={() => download(sampleData)}
                                            ><DownloadForOfflineIcon />
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

export default CollectionSounds;
