import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface SingleSelectProps {
  value: string[]
  handleChange: (event: SelectChangeEvent<string>) => void
  arrayOfOptions: string[] | number[]
  label: string
  startsFromZero: boolean
}

const SingleSelect: React.FC<SingleSelectProps> = ({value, handleChange,arrayOfOptions,label,startsFromZero}) => {

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
    </Box>
  )
}


export default SingleSelect