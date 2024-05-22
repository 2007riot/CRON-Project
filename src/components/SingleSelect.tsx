import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, FormControlLabel } from "@mui/material";

interface SingleSelectProps {
  value: string[];
  valueName: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleCheckChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  arrayOfOptions: string[] | number[];
  label: string;
  startsFromZero: boolean;
  isChecked: boolean;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  value,
  valueName,
  handleChange,
  isChecked,
  handleCheckChange,
  arrayOfOptions,
  label,
  startsFromZero,
}) => {
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
            <MenuItem key={option} value={startsFromZero ? index : index + 1}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControlLabel
        control={<Checkbox checked={value.length ===1 ? isChecked : false} onChange={handleCheckChange} />}
        label={isChecked && value.length === 1 ? `Repeat Every ${value} ${valueName}` : "Make repetative"}
      />
    </Box>
  );
};

export default SingleSelect;
