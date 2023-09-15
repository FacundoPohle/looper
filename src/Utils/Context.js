import React, { createContext, useContext, useState } from 'react';
import samplesData from './samplesData';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Context = createContext();

export const useGralContext = () => useContext(Context);

export function ContextProvider({ children }) {



  // Contexto del Audioplayer

  const [currentSample, setCurrentSample] = useState(null);
  const [currentAudioName, setCurrentAudioName] = useState('');



  // Contexto del Acordeon

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  // Contexto Filters

  const [selectedFilters, setSelectedFilters] = useState({
    type: null,
    genre: null,
    group: null,
    label: null,
  });

  const filteredSamples = samplesData.filter((sample) => {    // Filtra la lista de samples según los filtros seleccionados
    // Verifica si se ha seleccionado un filtro para cada propiedad
    const typeFilter = !selectedFilters.type || sample.type === selectedFilters.type;
    const genreFilter = !selectedFilters.genre || sample.genre === selectedFilters.genre;
    const groupFilter = !selectedFilters.group || sample.group === selectedFilters.group;
    const soundFilter = !selectedFilters.label || sample.label === selectedFilters.label;
    
    return typeFilter && genreFilter && groupFilter && soundFilter;// Retorna true si todas las condiciones de filtro se cumplen
  });

  const [theFilteredSamples, setTheFilteredSamples] = useState(filteredSamples); // Inicialmente, muestra todos los samples
  
  const handleFilterChange = (filterType, value) => {  // Maneja cambios en los filtros seleccionados
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({
      type: null,
      genre: null,
      group: null,
      label: null,
    });
    setTheFilteredSamples(samplesData); // Restablece filteredSamples a su estado original
  };




  //   OffCanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => {
    setShow(true);
  };




  // Contexto Carro
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
        text: "Successfully added to cart",
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
  

  // Función para quitar un sample del carrito
  const removeFromCart = (sampleToRemove) => {
    const updatedCart = cartList.filter(
      (sample) => sample.id !== sampleToRemove.id
    );
    setCartList(updatedCart);
    setCartCount(cartCount - 1)

  };


  return (
    <Context.Provider value={{ cartCount,  theFilteredSamples, handleResetFilters, show, handleClose, toggleShow, filteredSamples, selectedFilters, handleFilterChange, expanded, handleChange, currentAudioName, setCurrentAudioName, currentSample, setCurrentSample, cartList, addToCart, removeFromCart}}>
      {children}
    </Context.Provider>
  );
}
