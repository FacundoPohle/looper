import { useGralContext } from '../Utils/Context';

const ColorPicker = () => {
  const {dynamicColor, setDynamicColor} = useGralContext();

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setDynamicColor(newColor);
  };

  return (
    <input className='colorpicker' type="color" value={dynamicColor} onChange={handleColorChange} />
  );
};

export default ColorPicker;