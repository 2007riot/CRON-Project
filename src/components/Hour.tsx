import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";
import { options } from "../constants/constants";

export default function Hour() {
  const hours = [...Array(24).keys()].map((i) => i);

  const {
    selection,
    hour,
    handleHourChange,
    isNHour,
    handleNHourChange,
  }: GlobalStateContextType = useContext(GlobalContext);

  const index = options.indexOf(selection);
  const isDisplay = index > 0;

  return (
    isDisplay && (
      <div>
        <SingleSelect
          value={hour}
          handleChange={handleHourChange}
          arrayOfOptions={hours}
          label={"Set hour"}
          startsFromZero={true}
          valueName={"hour"}
          handleCheckChange={handleNHourChange}
          isChecked={isNHour}
        />
        <MultiSelectComponent
          value={hour}
          handleChange={handleHourChange}
          arrayOfOptions={hours}
          label={"Select multiple hours"}
          startsFromZero={true}
        />
      </div>
    )
  );
}
