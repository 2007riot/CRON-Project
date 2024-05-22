import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";
import { options } from "../constants/constants";

export default function MonthDay() {
  const daysOfTheMonth = [...Array(31).keys()].map((i) => i + 1);
  const {
    dayOfTheMonth,
    handleDayOfTheMonthChange,

    isNDayOfTheMonth,
    selection,
    handleNDayOfTheMonthChange,
  }: GlobalStateContextType = useContext(GlobalContext);
  const index = options.indexOf(selection);

  const isDisplay = index > 2;
  return (
    isDisplay && (
      <div className="item-container">
        <SingleSelect
          value={dayOfTheMonth}
          handleChange={handleDayOfTheMonthChange}
          arrayOfOptions={daysOfTheMonth}
          label={"Set day of the month"}
          startsFromZero={false}
          valueName={"day"}
          handleCheckChange={handleNDayOfTheMonthChange}
          isChecked={isNDayOfTheMonth}
        />
        <MultiSelectComponent
          value={dayOfTheMonth}
          handleChange={handleDayOfTheMonthChange}
          arrayOfOptions={daysOfTheMonth}
          label={"Select multiple days of the month"}
          startsFromZero={false}
        />
      </div>
    )
  );
}
