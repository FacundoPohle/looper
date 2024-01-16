// Import React hooks
import { useState, useEffect, useRef} from 'react';
import { useGralContext } from '../../Utils/Context';


// Import WaveSurfer
import WaveSurfer from 'wavesurfer.js'


// WaveSurfer hook

const useWavesurfer = (containerRef, options) => {
  // const containerRef = useRef();


  const [wavesurfer, setWavesurfer] = useState(null)
  const { currentSample, isMobile, dynamicColor } = useGralContext();


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
  }, [currentSample, isMobile, dynamicColor])


  return wavesurfer
}

export default useWavesurfer;