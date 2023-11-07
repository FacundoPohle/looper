import React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useGralContext } from '../../Utils/Context';
import useWavesurfer from './WsurferHook'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { motion } from "framer-motion"
import samplesData from '../../Utils/samplesData';
import { Slider } from '@mui/material';


// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = (props) => {
  const { currentAudioName, setCurrentSample, currentSample } = useGralContext();

  const containerRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(100); // Inicialmente al 100%
  const [isMuted, setIsMuted] = useState(false);
  const wavesurfer = useWavesurfer(containerRef, props)

  const formatTimeInMinutes = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // ...

  // Use formatTimeInMinutes para mostrar el tiempo actual en minutos
  const currentTimeInMinutes = formatTimeInMinutes(currentTime);
  const durationInMinutes = formatTimeInMinutes(duration);

  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
  }, [wavesurfer])

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return

    setCurrentTime(0)
    setIsPlaying(false)

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
      wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
      wavesurfer.on('decode', (duration) => setDuration(duration))
    ]

    return () => {
      subscriptions.forEach((unsub) => unsub())
    }
  }, [wavesurfer])

  const forwardButton = () => {
    wavesurfer.skip(10)
  }

  const backButton = () => {
    wavesurfer.skip(-10)
  };

  const onUrlChange = useCallback(() => {
    setCurrentSample((prevUrl) => {
      const currentIndex = samplesData.findIndex((sample) => sample.url === prevUrl);
      const nextIndex = (currentIndex + 1) % samplesData.length; // Calcula el próximo índice circularmente
      const nextSample = samplesData[nextIndex];
      return nextSample ? nextSample.url : prevUrl; // Devuelve la URL del próximo sample si existe, de lo contrario, conserva la actual
    });
  }, [ setCurrentSample]);



  // Función para actualizar el volumen del sample
  const updateVolume = useCallback(() => {
    if (wavesurfer) {
      if (isMuted) {
        wavesurfer.setVolume(0); // Si está silenciado, establece el volumen en 0
      } else {
        const newVolume = volume / 100;
        wavesurfer.setVolume(newVolume);
      }
    }
  }, [wavesurfer, volume, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Escuchar cambios en el valor del slider y actualizar el volumen
  useEffect(() => {
    updateVolume();
  }, [volume, updateVolume]);



  return (
    <div className='wavesurfer'>
      <div className='wavesurfer__info'>
        <div className='d-flex flex-row align-items-center'>
          <button className='forwardBackward' onClick={backButton}><KeyboardDoubleArrowLeftIcon /></button>
          <motion.div
            style={{ cursor: 'pointer', paddingInline: '15px'}}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          // onClick={() => handlePlaySample(sampleData)}
          ><button onClick={onPlayClick} className='playPause'>
              {isPlaying ? <PauseCircleIcon /> : <PlayCircleFilledRoundedIcon className='play' />}
            </button>
          </motion.div>
          <button className='forwardBackward' onClick={forwardButton}><KeyboardDoubleArrowRightIcon /></button>
          <div className='wavesurfer__next'>
            <motion.div
              style={{ cursor: 'pointer' }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}
              onClick={currentSample && onUrlChange}
            ><SkipNextIcon /></motion.div>
          </div>
        </div>
        <p className='wavesurfer__info--p2'>{currentAudioName ? currentAudioName : 'Sample de prueba'}</p>
        <p className='wavesurfer__info--p'> <span style={{ color: '#9900ff' }}>{currentTimeInMinutes}</span> / {durationInMinutes}</p>
        <div className='volume'>
          {isMuted ? (
            <VolumeOffIcon onClick={toggleMute} style={{ cursor: 'pointer' }} />
          ) : (
            <VolumeUpIcon onClick={toggleMute} style={{ cursor: 'pointer' }} />
          )}
          {isMuted ? (
            <Slider
            className='volume__slider'
            value={0}
            onChange={(event, newValue) => setVolume(newValue)} />
          ) : (
            <Slider
            className='volume__slider'
            value={volume}
            onChange={(event, newValue) => setVolume(newValue)} />
          )}
        </div>
      </div>

      <div ref={containerRef} className='wavesurfer__player' />

    </div>
  )
}

export default WaveSurferPlayer;