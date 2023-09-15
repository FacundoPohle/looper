import React from 'react'
import WaveSurferPlayer from "./WaveSurfer"
import { useGralContext } from '../Utils/Context';
import Timeline from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js'


// Another React component that will render two wavesurfers
const WaveSurfer = () => {
const { currentSample } = useGralContext();

    // gradiente
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 150)
    gradient.addColorStop(0, '#9900ff')
    gradient.addColorStop(0.7, 'rgb(100, 0, 100)')
    gradient.addColorStop(1, 'rgb(0, 0, 0)')

    // Render the wavesurfer component
    // and a button to load a different audio file
    return (
        <>
            <WaveSurferPlayer
                waveColor= {gradient}
                height={60}
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