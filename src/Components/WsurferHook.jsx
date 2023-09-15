// Import React hooks
import { useState, useEffect} from 'react';

// Import WaveSurfer
import WaveSurfer from 'wavesurfer.js'
import { useGralContext } from '../Utils/Context';

// WaveSurfer hook
const useWavesurfer = (containerRef, options) => {
  const {currentSample} = useGralContext()
  const [wavesurfer, setWavesurfer] = useState(null)

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    })

    setWavesurfer(ws)

    return () => {
      ws.destroy()
    }
  }, [options, containerRef])

  useEffect(() => {
    if (currentSample) {
      // Aquí puedes realizar las acciones relacionadas con currentSample,
      // como cargar una nueva canción en WaveSurfer.
      if (wavesurfer) {
        // Cargar la nueva canción
        wavesurfer.load(currentSample.url);
      }
    }
  }, [currentSample, wavesurfer]);

  return wavesurfer
}

export default useWavesurfer;