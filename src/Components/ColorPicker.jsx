import React, { useState } from 'react';
import { useGralContext } from '../Utils/Context';

const ColorPicker = () => {
  const {dynamicColor, setDynamicColor} = useGralContext();
  const [color, setColor] = useState(dynamicColor);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    setDynamicColor(newColor);
  };

  return (
    <input className='colorpicker' type="color" value={color} onChange={handleColorChange} />
  );
};

export default ColorPicker;