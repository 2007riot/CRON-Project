import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

interface SingleSelectProps {
  value: string[]
  valueName: string
  handleChange: (event: SelectChangeEvent<string>) => void
  handleCheckChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
  arrayOfOptions: string[] | number[]
  label: string
  startsFromZero: boolean
  isChecked: boolean
}

const SingleSelect: React.FC<SingleSelectProps> = ({value, valueName, handleChange,isChecked,handleCheckChange, arrayOfOptions,label,startsFromZero}) => {


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value.length > 1 ? "" : value[0] === "*" ? "" : value[0] ?? ""}
          label={label}
          onChange={handleChange}
        >
          {arrayOfOptions.map((option, index) => (
          <MenuItem key={option} value={startsFromZero ? index: index +1 }>
          {option}
        </MenuItem>
        ))}
        </Select>
      </FormControl>

      <FormControlLabel  control={<Checkbox checked={isChecked} onChange={handleCheckChange}  />} label={`Repeat `} />
      {/* every ${value[0]}th ${valueName} */}


    </Box>

  )
}


export default SingleSelect