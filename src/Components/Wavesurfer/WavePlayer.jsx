import React from 'react'
import { useGralContext } from '../../Utils/Context';
import WaveSurferPlayer from "./WaveSurfer"
import { useEffect} from 'react';
import Timeline from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js'

// Another React component that will render two wavesurfers
const WaveSurfer = () => {
const { currentSample, isMobile, setIsMobile, dynamicColor } = useGralContext();


    // gradiente
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 150)
    gradient.addColorStop(0, dynamicColor)
    gradient.addColorStop(0.7, 'rgb(100, 0, 100)')
    gradient.addColorStop(1, 'rgb(0, 0, 0)')

    // Render the wavesurfer component
    // and a button to load a different audio file


    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 700px)");
    
        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
    
        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = () => {
          setIsMobile(mediaQuery.matches);
        };
    
        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        // Remove the listener when the component is unmounted
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }, []);

    return (
        <>
            <WaveSurferPlayer
                waveColor= {gradient}
                height={isMobile ? 30 : 60}
                // waveColor="#9900ff"
                progressColor="#fafafa"
                barWidth={2}
                barGap= {2}
                barRadius= {2}
                url={currentSample ? currentSample : "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3" }
                plugins={[Timeline.create()]}
            />

            {/* <button onClick={onUrlChange}>Change audio</button> */}
        </>
    )
}

export default WaveSurfer;