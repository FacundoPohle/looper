import React from 'react';
import genres from '../Utils/genres.js'; // Asegúrate de importar los datos adecuadamente

const GenreMenu = (props) => {

  return (
    <div className='Graldiv__genres'>
    {genres.map(genre => (
      <div key={genre.id}>
        <button className='Mp' onClick={() => props.handleGenreSelect(genre.id)}>{genre.name}</button>
      </div>
    ))}
  </div>
  );
};

export default GenreMenu;
