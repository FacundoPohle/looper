import React, { createContext, useContext, useState, useEffect } from 'react';
import samplesData from './samplesData';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Context = createContext();

export const useGralContext = () => useContext(Context);

export function ContextProvider({ children }) {

///////////////////////////////////////GiftCards//////////////////////////////////////////////
// Ejemplo en tu contexto
const [selectedGiftCard, setSelectedGiftCard] = useState(null);

// Función para seleccionar una gift card
const selectGiftCard = (packageType) => {
  setSelectedGiftCard(packageType);

  Toastify({
    text: `You have selected the ${packageType.name}`,  // Usamos el parámetro actualizado packageType
    duration: 3000,
    style: {
      background: `${packageType.gradient}`,  // Usamos el parámetro actualizado packageType
    },
  }).showToast();
};

const deleteGiftCard = () => {
  setSelectedGiftCard(null)
}

useEffect(() => {
  // Realiza acciones cuando selectedGiftCard cambie
  console.log('Selected Gift Card:', selectedGiftCard);
  // Puedes realizar más lógica aquí según tus necesidades
}, [selectedGiftCard]); // La dependencia aquí indica que el efecto se ejecutará cuando selectedGiftCard cambie




///////////////////////////////////////ColorPicker Context///////////////////////////////////////
  // const [dynamicColor, setDynamicColor] = useState('#9900ff');

  const [dynamicColor, setDynamicColor] = useState(() => {
    try {
      const storedDynamicColor = localStorage.getItem('dynamicColor');
      return storedDynamicColor || '#9900ff';
    } catch (error) {
      console.error('Error initializing dynamicColor:', error);
      return '#9900ff';
    }
  });
  
  //storage
  useEffect(() => {
    try {
      const storedDynamicColor = localStorage.getItem('dynamicColor');
      if (storedDynamicColor) {
        setDynamicColor(storedDynamicColor);
      }
    } catch (error) {
      console.error('Error initializing dynamicColor:', error);
    }
  }, []);

  // Actualizar el localStorage cada vez que dynamicColor cambie
  useEffect(() => {
    localStorage.setItem('dynamicColor', dynamicColor);
  }, [dynamicColor]);


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
  const [cartList, setCartList] = useState([]//() => {
  //   try {
  //     const storedCartList = JSON.parse(localStorage.getItem('cartList'));
  //     return storedCartList || [];
  //   } catch (error) {
  //     console.error('Error initializing cartList:', error);
  //     return [];
  //   }
  // }
  );
  const [cartCount, setCartCount] = useState(0);
  const [purchasedSamples, setPurchasedSamples] = useState([]//() => {
  //   try {
  //     const storedPurchasedSamples = JSON.parse(localStorage.getItem('purchasedSamples'));
  //     return storedPurchasedSamples || [];
  //   } catch (error) {
  //     console.error('Error initializing cartList:', error);
  //     return [];
  //   }
  // }
  ); // Nuevo estado para almacenar samples comprados
  const [downloadedSamples, setDownloadedSamples] = useState([]//() => {
  //   try {
  //     const storedDownloadedSamples = JSON.parse(localStorage.getItem('downloadedSamples'));
  //     return storedDownloadedSamples || [];
  //   } catch (error) {
  //     console.error('Error initializing cartList:', error);
  //     return [];
  //   }
  // }
  ); // Nuevo estado para almacenar samples comprados

  // useEffect(() => {
  //   // Almacenar datos en localStorage cada vez que cambian
  //   localStorage.setItem('cartList', JSON.stringify(cartList));
  //   localStorage.setItem('purchasedSamples', JSON.stringify(purchasedSamples));
  //   localStorage.setItem('downloadedSamples', JSON.stringify(downloadedSamples));
  // }, [cartList, purchasedSamples, downloadedSamples]);

  // useEffect(() => {
  //   try {
  //     // Recuperar datos de localStorage al cargar el componente
  //     const storedCartList = JSON.parse(localStorage.getItem('cartList'));
  //     const storedPurchasedSamples = JSON.parse(localStorage.getItem('purchasedSamples'));
  //     const storedDownloadedSamples = JSON.parse(localStorage.getItem('downloadedSamples'));
  
  //     if (storedCartList && storedCartList.length > 0) {
  //       setCartList(storedCartList);
  //       setCartCount(storedCartList.length);
  //     }
  //     if (storedPurchasedSamples && storedPurchasedSamples.length > 0) {
  //       setPurchasedSamples(storedPurchasedSamples);
  //     }
  //     if (storedDownloadedSamples && storedDownloadedSamples.length > 0) {
  //       setDownloadedSamples(storedDownloadedSamples);
  //     }
  //   } catch (error) {
  //     console.error('Error loading data from localStorage:', error);
  //   }
  // }, []);


  // Función para agregar un sample al carrito
  const addToCart = (sample) => {
    // Verifica si el sample ya está en el carrito por su ID
    const isSampleInCart = cartList.some((cartItem) => cartItem.id === sample.id);

    if (!isSampleInCart) {
      
      // Si el sample no está en el carrito, agrégalo
      setCartList((prevCartList) => [...prevCartList, sample]);

      setCartCount((prevCount) => prevCount + 1);

      // Muestra una notificación
      Toastify({
        text: "Added in cart",
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
    return parseFloat((calcDiscount() * 0.15).toFixed(2));
  }

  const calcDiscount = () => {
    const discount = selectedGiftCard ? selectedGiftCard.discount : 0;

    return parseFloat((calculateSubTotal() * (1 - discount)).toFixed(2));
  }

  const calculateTotalPrice = () => {
    const tax = parseFloat(calcTax());
    const discount = parseFloat(calcDiscount())
    const total = discount + tax;

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

  function calculateSamplesRemaining(cartList, selectedGiftCard) {
    if (!selectedGiftCard || !selectedGiftCard.pack) {
      // Si selectedGiftCard o su propiedad pack son null o undefined, retorna 0
      return 0;
    }
  
    const packSize = selectedGiftCard.pack;
  
    if (!Array.isArray(cartList) || packSize === 0) {
      // Si cartList no es un array o el tamaño del paquete es 0, retorna 0
      return 0;
    }
  
    const samplesInCart = cartList.length;
  
    // Calcula la cantidad de muestras restantes para completar el paquete
    const samplesRemaining = packSize - samplesInCart;
  
    return samplesRemaining >= 0 ? samplesRemaining : 0;
  }

  const samplesRemaining = calculateSamplesRemaining(cartList, selectedGiftCard);
  
  const handleCheckout = () => {
    if (selectedGiftCard) {
      // Verificar si la cantidad de samples en el carrito es igual a la cantidad requerida por la gift card
      if (cartList.length !== selectedGiftCard.pack) {
        // Mostrar un mensaje de error o tomar la acción apropiada según tus necesidades
       
          Toastify({
            text: "You're missing samples to complete the Package discount",
            duration: 2500,
            style: {
              background: "linear-gradient(to right, #ff0000, #ff3333)",
            },
          }).showToast();
        
        console.log('No puedes hacer el checkout. Agrega la cantidad correcta de samples para la gift card.');
        return;
      } 
    }
  
    // Copiar los samples del cartList al array de samples comprados
    setPurchasedSamples([...cartList]);
  
    // Limpiar el cartList (opcional, dependiendo de tu lógica)
    clearCart();
  };
  

  const download = (sampleData) => {
    // Verificar si el sample ya ha sido descargado
    const isSampleDownloaded = downloadedSamples.some((downloadedSample) => downloadedSample.id === sampleData.id);
  
    if (!isSampleDownloaded) {
      // Si el sample no ha sido descargado, agregarlo al array de samples descargados
      setDownloadedSamples((prevDownloadedSamples) => [...prevDownloadedSamples, sampleData]);
  
      Toastify({
        text: "Successfully downloaded",
        duration: 1500,
        style: {
          background: `linear-gradient(to right, ${dynamicColor}, #222, ${dynamicColor})`,
        },
      }).showToast();
    } else {
      // Si el sample ya ha sido descargado, mostrar una notificación de error
      Toastify({
        text: "This sample has already been downloaded",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
        },
      }).showToast();
    }
  };

  const purchasedAlert = () => {
    Toastify({
      text: "Already yours!",
      duration: 1500,
      style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
      },
  }).showToast();
  };




  ///////////////////////////////////////////Profile Context////////////////////////////////////////////
 
  const user = true
 
 
  // Favoritos

  const [favoriteSamples, setFavoriteSamples] = useState([]);

  const toggleFavorite = (sample) => {
    if (!favoriteSamples.includes(sample)) {
        // Si el sample no está en la lista de favoritos, agrégalo
        setFavoriteSamples((prevFavorites) => [...prevFavorites, sample]);

        Toastify({
            text: "Successfully added to favorites",
            duration: 1500,
            style: {
                background: "linear-gradient(to right, #fc466b, black, #fc466b)",
                background: `linear-gradient(to right, ${dynamicColor}, #222, ${dynamicColor})`,
            },
        }).showToast();
    } else {
        // Si el sample ya está en la lista de favoritos, quítalo
        setFavoriteSamples((prevFavorites) =>
            prevFavorites.filter((favSample) => favSample !== sample)
        );

        Toastify({
            text: "Removed from favorites",
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

    Toastify({
      text: "Removed from favorites",
      duration: 1500,
      style: {
          background: "linear-gradient(to right, #ff0000, #ff3333)",
      },
  }).showToast();
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
    <Context.Provider value={{deleteGiftCard, samplesRemaining, calculateSamplesRemaining, selectedGiftCard, user, selectGiftCard, downloadedSamples, download, handleCheckout, purchasedAlert, purchasedSamples, setPurchasedSamples, dynamicColor, setDynamicColor, isMobile, setIsMobile, removeFromPlaylist, addToPlaylist, selectedPlaylist, setSelectedPlaylist, playlists, setPlaylists, deletePlaylist, favoriteSamples, toggleFavorite, removeFromFavorites, cartCount, theFilteredSamples, handleResetFilters, show, handleClose, toggleShow, filteredSamples, selectedFilters, handleFilterChange, expanded, handleChange, currentAudioName, setCurrentAudioName, currentSample, setCurrentSample, cartList, addToCart, removeFromCart, calculateTotalPrice, calculateSubTotal, calcTax, clearCart, calcDiscount, filterNames }}>
      {children}
    </Context.Provider>
  );
}

