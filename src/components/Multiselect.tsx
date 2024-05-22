import React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { SelectChangeEvent } from '@mui/material/Select';

interface MultiSelectProps {
  value: string[]
  handleChange: (event: SelectChangeEvent<string[]>) => void
  arrayOfOptions: string[] | number[]
  label: string
  startsFromZero: boolean
}

const MultiSelectComponent: React.FC<MultiSelectProps> = ({
  value,
  handleChange,
  arrayOfOptions,
  label,
  startsFromZero
}) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput  label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.length>1 ? selected.map((value) => (
              <Chip
                key={value}
                label={ 
                  // value === "*"
                  //   ? ""
                  //   : 
                    startsFromZero ? value : arrayOfOptions[parseInt(value) - 1]
                }
              />
            )) : <InputLabel>{label}</InputLabel>}
          </Box>
        )}
      >
        {/* это мы отдаем крону */}
        {arrayOfOptions.map((option, index) => (
          <MenuItem key={option} value={startsFromZero ? index : index+1 }>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultiSelectComponent