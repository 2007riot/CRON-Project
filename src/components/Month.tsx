import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";
import { options } from "../constants/constants";

export default function Month() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const {
    month,
    handleMonthChange,
    selection,
    isNMonth,
    handleNMonthChange,
  }: GlobalStateContextType = useContext(GlobalContext);

  const index = options.indexOf(selection);
  const isDisplay = index > 3;
  return (
    isDisplay && (
      <div className="item-container">
        <SingleSelect
          value={month}
          handleChange={handleMonthChange}
          arrayOfOptions={months}
          label={"Set month"}
          startsFromZero={false}
          valueName={"month"}
          handleCheckChange={handleNMonthChange}
          isChecked={isNMonth}
        />
        <MultiSelectComponent
          value={month}
          handleChange={handleMonthChange}
          arrayOfOptions={months}
          label={"Select multiple months"}
          startsFromZero={false}
        />
      </div>
    )
  );
}
