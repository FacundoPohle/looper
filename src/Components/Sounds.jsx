import Prueba from "./Prueba";
import { useGenre } from '../Utils/GenreContext';
import SampleList from './SampleList';

const Sounds = ({ isGenreMenuVisible }) => {
    const { selectedGenre } = useGenre();

    return(
     <div className="Graldiv">
        <Prueba title='Sounds'/>
        {isGenreMenuVisible && selectedGenre !== null ? (
        <SampleList genreId={selectedGenre}/>
      ) : (
        <p>Selecciona un género musical para ver los samples.</p>
      )}
     </div>
    );
}

export default Sounds;