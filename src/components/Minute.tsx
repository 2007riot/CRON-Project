import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";

export default function Minute() {
  const minutes = [...Array(60).keys()].map((i) => i);
  const {
    minute,
    handleMinuteChange,
    isNmin,
    handleNMinChange,
  }: GlobalStateContextType = useContext(GlobalContext);

  return (
    <div className="item-container">
      <SingleSelect
        value={minute}
        handleChange={handleMinuteChange}
        arrayOfOptions={minutes}
        label={"Set minute"}
        startsFromZero={true}
        valueName={"minute"}
        handleCheckChange={handleNMinChange}
        isChecked={isNmin}
      />
      <MultiSelectComponent
        value={minute}
        handleChange={handleMinuteChange}
        arrayOfOptions={minutes}
        label={"Select multiple minutes"}
        startsFromZero={true}
      />
    </div>
  );
}