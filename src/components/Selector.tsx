import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import { useContext } from "react";
import { options } from "../constants/constants";

export default function Selector() {
  const { selection, handleSelectorChange }: GlobalStateContextType =
    useContext(GlobalContext);
  console.log(typeof selection);

  return (
    <>
      <Box sx={{ width: 500 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Choose repetions
          </InputLabel>
          <Select
            value={selection}
            label={"Choose repetions"}
            onChange={handleSelectorChange}
          >
            {options.map((option, i) => (
              <MenuItem value={option} key={i}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
