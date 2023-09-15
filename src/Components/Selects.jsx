// Select
import { useGralContext } from '../Utils/Context';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import samplesData from '../Utils/samplesData';
import { useState} from 'react'


function Select1() {

  const { handleFilterChange } = useGralContext();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }} >
        <InputLabel  id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          variant="outlined"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => handleFilterChange('type', e.target.value)}
          autoWidth
          label="Type"
        >
          <MenuItem className='Select' value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Producción musical">Producción musical</MenuItem>
          <MenuItem value="Video y cinemáticas">Video y cinemáticas</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


function Select3() {

  const { handleFilterChange } = useGralContext();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => handleFilterChange('group', e.target.value)}
          autoWidth
          label="Group"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Loop">Loop</MenuItem>
          <MenuItem value="Clap">Clap</MenuItem>
          <MenuItem value="Hi hat">Hi hat</MenuItem>
          <MenuItem value="Tom">Tom</MenuItem>
          <MenuItem value="Tambourine">Tambourine</MenuItem>
          <MenuItem value="Shake">Shake</MenuItem>
          <MenuItem value="Crush">Crush</MenuItem>
          <MenuItem value="Instruments">Instruments</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


function Select2() {

  const { handleFilterChange } = useGralContext();
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e) => handleFilterChange('genre', e.target.value)}
          autoWidth
          label="Group"
          >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="TECHNO">TECHNO</MenuItem>
          <MenuItem value="Tech House">Tech House</MenuItem>
          <MenuItem value="Ambient">Ambient</MenuItem>
          <MenuItem value="Pop">Pop</MenuItem>
          <MenuItem value="Tambourine">Tambourine</MenuItem>
          <MenuItem value="TRAP/RAP">TRAP/RAP</MenuItem>
          <MenuItem value="ELECTRO">ELECTRO</MenuItem>
          <MenuItem value="DRUM and bass">DRUM and bass</MenuItem>
          <MenuItem value="Acid">Acid</MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


function ComboBox() {

  const { handleFilterChange} = useGralContext();
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={ samplesData}
    value={selectedValue}
    onChange={(event, newValue) => {
      setSelectedValue(newValue); // Almacenar el valor seleccionado
      handleFilterChange('label', newValue ? newValue.label : null); // Llamar a la función de manejo del filtro con el nuevo valor
    }}
    sx={{ width: 200, height:80}}
    renderInput={(params) => <TextField {...params} label="Sample" />}
    />
    );
  }
  
  export {Select1, Select2, Select3, ComboBox};