import GenreMenu from "./GenreMenu";
import Prueba from './Prueba';
import { useGenre } from '../Utils/GenreContext';


const MusicProduction = ({handleToggleGenreMenu, isGenreMenuVisible}) => {

  const { handleGenreSelect } = useGenre();
 
  return (
    <div className="Graldiv">
          <Prueba handleToggleGenreMenu={handleToggleGenreMenu} title='Music Production'/>
          {isGenreMenuVisible && (
              <GenreMenu handleGenreSelect={handleGenreSelect}/>
          )}
    </div>

  )
}

export default MusicProduction;