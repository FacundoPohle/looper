import { useGenre } from '../Utils/GenreContext';  
import samplesData from '../Utils/samplesData.js'; // Asegúrate de importar los datos adecuadamente

const SampleList = () => {
  const { selectedGenre } = useGenre();
  const samplesForGenre = samplesData.filter(sample => sample.genreId === selectedGenre);

  return (
    <div className="sample-list">
      <h2>Samples</h2>
      <ul>
        {samplesForGenre.map(sample => (
          <li key={sample.id}>
            <div>
              <h3>{sample.name}</h3>
              <p>{sample.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SampleList;
