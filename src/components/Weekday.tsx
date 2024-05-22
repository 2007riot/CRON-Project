import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";
import { options } from "../constants/constants";

export default function Weekday() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const {
    dayOfTheWeek,
    handleDayOfTheWeekChange,
    isNDayOfTheWeek,
    selection,
    handleNDayOfTheWeekChange,
  }: GlobalStateContextType = useContext(GlobalContext);

  const index = options.indexOf(selection);
  const isDisplay = index > 1;
  return (
    isDisplay && (
      <div className="item-container">
        <SingleSelect
          value={dayOfTheWeek}
          handleChange={handleDayOfTheWeekChange}
          arrayOfOptions={weekdays}
          label={"Set day of the week"}
          startsFromZero={false}
          valueName={"day of the week"}
          handleCheckChange={handleNDayOfTheWeekChange}
          isChecked={isNDayOfTheWeek}
        />
        <MultiSelectComponent
          value={dayOfTheWeek}
          handleChange={handleDayOfTheWeekChange}
          arrayOfOptions={weekdays}
          label={"Select multiple days of the week"}
          startsFromZero={false}
        />
      </div>
    )
  );
}
