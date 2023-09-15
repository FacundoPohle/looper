import { useGralContext } from '../Utils/Context';
import samplesData from '../Utils/samplesData';

function VideoAndCinematics() {
    
  const { handleGenreSelect } = useGralContext();

  const filteredSamples = samplesData.filter(sample => sample.type === 'Video y cinemáticas')

  const uniqueItemsSet = new Set();
  const uniqueSamples = [];
  filteredSamples.forEach(sample => {
    if (!uniqueItemsSet.has(sample.genre)) {
      uniqueItemsSet.add(sample.genre);
      uniqueSamples.push(sample);
    }
  });
  
    return (
      <div>
        <ul className='Graldiv__genres gap-4'>
          {uniqueSamples
            .map(samplesData => (
              <li key={samplesData.id}>
                <div className='Graldiv__button' onClick={() => handleGenreSelect(samplesData.genre)}>{samplesData.genre}</div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  
export default VideoAndCinematics;