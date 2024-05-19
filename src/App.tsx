import { useContext } from "react";
import "./App.css";
import Macros from "./components/Macros";
import Custom from "./components/Custom";
import { GlobalContext, GlobalStateContextType } from "./context/Context";
import { Button, TextField } from "@mui/material";

function App() {
  const {
    cron,
    handleCronChange,
    handleLoadInterface,
  }: GlobalStateContextType = useContext(GlobalContext);

  return (
    <div className="cron-ui">
      <Macros />
      <Custom />
      <TextField
        sx={{ m: "auto", width: "30%" }}
        size="medium"
        id="filled-basic"
        value={cron.join(" ")}
        label={"Cron string"}
        onChange={handleCronChange}
      />
      <Button sx={{ m: "auto", width: 200 }} onClick={handleLoadInterface} >Load interface</Button>
      {/* <p>Your cron code: {cron.join(" ")}</p> */}
    </div>
  );
}

export default App;
