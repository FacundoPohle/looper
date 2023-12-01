// Import React hooks
import { useState, useEffect} from 'react';
import { useGralContext } from '../../Utils/Context';


// Import WaveSurfer
import WaveSurfer from 'wavesurfer.js'

// WaveSurfer hook
const useWavesurfer = (containerRef, options) => {
  const [wavesurfer, setWavesurfer] = useState(null)
const { currentSample, isMobile } = useGralContext();


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
  }, [currentSample, isMobile])


  return wavesurfer
}

export default useWavesurfer;