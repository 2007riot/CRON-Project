import { useContext } from "react";
import "./App.css";
import { GlobalContext, GlobalStateContextType } from "./context/Context";
import { Box, Button, TextField } from "@mui/material";
import Selector from "./components/Selector";
import Minute from "./components/Minute";
import Weekday from "./components/Weekday";
import MonthDay from "./components/MonthDay";
import Hour from "./components/Hour";
import Month from "./components/Month";

function App() {
  const {
    cron,
    handleCronChange,
    handleLoadInterface,
    save,
    isValidCron,
    errorMsg,
  }: GlobalStateContextType = useContext(GlobalContext);

  return (
    <div className="cron-ui">
      <Box sx={{ fontSize: "28px" }}>CRON Schedule</Box>
      <Selector />

      <Minute />
      <Hour />
      <Weekday />
      <MonthDay />
      <Month />
      <Button sx={{ m: "auto", width: 200 }} variant="contained" onClick={save}>
        Save
      </Button>
      <TextField
      error = {!isValidCron()}
      helperText = {isValidCron() ? "" :errorMsg }
        sx={{ m: "auto", width: "30%" }}
        size="medium"
        id="filled-basic"
        value={cron.join(" ")}
        label={"Cron string"}
        onChange={handleCronChange}
      />
      <Button
        sx={{ m: "auto", width: 200 }}
        variant="contained"
        onClick={handleLoadInterface}
        disabled = {!isValidCron()}
      >
        Load
      </Button>
      {/* <p>Your cron code: {cron.join(" ")}</p> */}
    </div>
  );
}

export default App;
