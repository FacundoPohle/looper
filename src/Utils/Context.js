import React, { createContext, useContext, useState, useEffect } from 'react';
import samplesData from './samplesData';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Context = createContext();

export const useGralContext = () => useContext(Context);

export function ContextProvider({ children }) {


///////////////////////////////////////ColorPicker Context///////////////////////////////////////
  const [dynamicColor, setDynamicColor] = useState('#9900ff');



  document.documentElement.style.setProperty('--dynamic', dynamicColor);
  //////////////////////////////////////Audioplayer Context/////////////////////////////////////
  const [currentSample, setCurrentSample] = useState(null);
  const [currentAudioName, setCurrentAudioName] = useState('');



///////////////////////////////////////Filters Context///////////////////////////////////////////
  // Acordeon
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //Filters
  const [selectedFilters, setSelectedFilters] = useState({
    type: null,
    genre: null,
    group: null,
    name: null,
  });

  const filteredSamples = samplesData.filter((sample) => {    // Filtra la lista de samples según los filtros seleccionados
    // Verifica si se ha seleccionado un filtro para cada propiedad
    const typeFilter = !selectedFilters.type || sample.type === selectedFilters.type;
    const genreFilter = !selectedFilters.genre || sample.genre === selectedFilters.genre;
    const groupFilter = !selectedFilters.group || sample.group === selectedFilters.group;
    const soundFilter = !selectedFilters.name || sample.name === selectedFilters.name;

    return typeFilter && genreFilter && groupFilter && soundFilter;// Retorna true si todas las condiciones de filtro se cumplen
  });

  const [theFilteredSamples, setTheFilteredSamples] = useState(filteredSamples); // Inicialmente, muestra todos los samples

  const handleFilterChange = (filterType, value) => {  // Maneja cambios en los filtros seleccionados
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Estado adicional para almacenar los nombres de los filtros
  const [filterNames, setFilterNames] = useState([]);

  // Función para actualizar los nombres de los filtros
  const updateFilterNames = (names) => {
    setFilterNames(names.join(', '));
  };

  useEffect(() => {
    const names = Object.keys(selectedFilters)
      .map((key) => selectedFilters[key])
      .filter(Boolean);

    // Actualiza el estado con los nombres de los filtros
    updateFilterNames(names);
    console.log('Filtros seleccionados:', filterNames);
  }, [selectedFilters]);

  const handleResetFilters = () => {
    setSelectedFilters({
      type: null,
      genre: null,
      group: null,
      name: null,
    });
    setTheFilteredSamples(samplesData); // Restablece filteredSamples a su estado original
  };

  //   OffCanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => {
    setShow(true);
  };



  ///////////////////////////////////////////Carro Context////////////////////////////////////////////
  const [cartList, setCartList] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  // Función para agregar un sample al carrito
  const addToCart = (sample) => {
    // Verifica si el sample ya está en el carrito por su ID
    const isSampleInCart = cartList.some((cartItem) => cartItem.id === sample.id);

    if (!isSampleInCart) {
      // Si el sample no está en el carrito, agrégalo
      setCartList([...cartList, sample]);

      setCartCount(cartCount + 1)

      // Muestra una notificación
      Toastify({
        text: "Successfully added",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
        },
      }).showToast();
    } else {
      // Si el sample ya está en el carrito, muestra una notificación de error
      Toastify({
        text: "This sample is already in your cart",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
        },
      }).showToast();
    }

  };

  const calculateSubTotal = () => {
    let totalPrice = 0;

    for (const sample of cartList) {
      totalPrice += parseFloat(sample.price);
    }

    // Round to two decimal places
    return totalPrice.toFixed(2);
  };

  const calcTax = () => {
    return calculateSubTotal() * 0.15;
  }

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubTotal());
    const tax = parseFloat(calcTax());
    const total = subtotal + tax;

    // Round to two decimal places
    return total.toFixed(2);
  };

  // Función para quitar un sample del carrito
  const removeFromCart = (sampleToRemove) => {
    const updatedCart = cartList.filter(
      (sample) => sample.id !== sampleToRemove.id
    );
    setCartList(updatedCart);
    setCartCount(cartCount - 1)

  };


  const clearCart = () => {
    setCartList([]);
    setCartCount(0);
  };




  ///////////////////////////////////////////Profile Context////////////////////////////////////////////
  // Favoritos

  const [favoriteSamples, setFavoriteSamples] = useState([]);
  const addToFavorites = (sample) => {
    if (!favoriteSamples.includes(sample)) {
      setFavoriteSamples((prevFavorites) => [...prevFavorites, sample]);

      Toastify({
        text: "Successfully added favorites",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #fc466b, #3f5efb, #fc466b)",
        },
      }).showToast();
    } else {
      // Si el sample ya está en el carrito, muestra una notificación de error
      Toastify({
        text: "This sample is already in your favorites",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
        },
      }).showToast();
    }
  };

  const removeFromFavorites = (sample) => {
    setFavoriteSamples((prevFavorites) =>
      prevFavorites.filter((favSample) => favSample !== sample)
    );
  };

  //Playlist
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  const deletePlaylist = () => {
    // Verifica si hay una playlist seleccionada
    if (selectedPlaylist) {
      // Filtra las playlists para excluir la playlist seleccionada
      const updatedPlaylists = playlists.filter((playlist) => playlist !== selectedPlaylist);

      // Actualiza la lista de playlists
      setPlaylists(updatedPlaylists);

      // Elimina la selección de la playlist
      setSelectedPlaylist(null);

      // Mensaje de eliminación exitosa
      Toastify({
        text: `Playlist deleted successfully`,
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
        },
      }).showToast();
    }
  };

  const updatePlaylist = (updatedPlaylist) => {
    setPlaylists(prevPlaylists => {
      const updatedPlaylists = prevPlaylists.map(playlist => {
        if (playlist.name === updatedPlaylist.name) {
          return updatedPlaylist;  // Actualiza la playlist correspondiente
        }
        return playlist;
      });
      return updatedPlaylists;
    });
  };

  const addToPlaylist = (sampleData) => {
    if (selectedPlaylist) {
      // Verifica si el sample ya está en la lista de reproducción
      const isSampleAlreadyAdded = selectedPlaylist.samples.some(
        (sample) => sample.id === sampleData.id
      );

      // Si el sample no está en la lista, agrégalo
      if (!isSampleAlreadyAdded) {
        // Crea una nueva copia de la playlist para actualizarla
        const updatedPlaylist = { ...selectedPlaylist };

        // Agrega el sample al array de samples de la playlist
        updatedPlaylist.samples.push(sampleData);

        // Actualiza la playlist en el contexto
        updatePlaylist(updatedPlaylist);
      } else {
        console.log('Este sample ya está en la lista de reproducción.');
      }
    }
  };

  const removeFromPlaylist = (sampleId) => {
    if (selectedPlaylist) {
      const updatedSamples = [...selectedPlaylist.samples];  // Create a copy of the samples array

      const indexToRemove = updatedSamples.findIndex(
        (sample) => sample.id === sampleId
      );

      if (indexToRemove !== -1) {
        updatedSamples.splice(indexToRemove, 1);  // Remove the item at the specified index
      }

      const updatedPlaylist = {
        ...selectedPlaylist,
        samples: updatedSamples,
      };

      // Update the playlist in the context
      updatePlaylist(updatedPlaylist);
      setSelectedPlaylist(updatedPlaylist);
    }
  };

  const [isMobile, setIsMobile] = useState(false);





  return (
    <Context.Provider value={{ dynamicColor, setDynamicColor, isMobile, setIsMobile, removeFromPlaylist, addToPlaylist, selectedPlaylist, setSelectedPlaylist, playlists, setPlaylists, deletePlaylist, favoriteSamples, addToFavorites, removeFromFavorites, cartCount, theFilteredSamples, handleResetFilters, show, handleClose, toggleShow, filteredSamples, selectedFilters, handleFilterChange, expanded, handleChange, currentAudioName, setCurrentAudioName, currentSample, setCurrentSample, cartList, addToCart, removeFromCart, calculateTotalPrice, calculateSubTotal, calcTax, clearCart, filterNames }}>
      {children}
    </Context.Provider>
  );
}
