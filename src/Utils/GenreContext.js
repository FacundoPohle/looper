import React, { createContext, useContext, useState } from 'react';

const GenreContext = createContext();

export function useGenre() {
  return useContext(GenreContext);
}

export function ContextProvider({ children }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <GenreContext.Provider value={{ selectedGenre, handleGenreSelect }}>
      {children}
    </GenreContext.Provider>
  );
}

// // GenreContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Crear el contexto del género y del grupo
// const GenreContext = createContext();
// const GroupContext = createContext();

// // Crear un componente proveedor que utilizará los contextos del género y del grupo
// export const ContextProvider = ({ children }) => {
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   return (
//     <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
//       <GroupContext.Provider value={{ selectedGroup, setSelectedGroup }}>
//         {children}
//       </GroupContext.Provider>
//     </GenreContext.Provider>
//   );
// };

// // Crear hooks personalizados para utilizar los contextos del género y del grupo
// export const useGenre = () => {
//   return useContext(GenreContext);
// };

// export const useGroup = () => {
//   return useContext(GroupContext);
// };
