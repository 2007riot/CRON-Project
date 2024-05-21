import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";
import { options } from "../constants/constants";

export default function Weekday() {
  const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

  const {
   
    minute, handleMinuteChange,
    hour, handleHourChange,
    dayOfTheMonth, handleDayOfTheMonthChange,
    month, handleMonthChange,
    dayOfTheWeek, handleDayOfTheWeekChange,
    isNmin, handleNMinChange,
        isNHour,
        isNDayOfTheMonth,
        isNMonth,
        isNDayOfTheWeek,
        selection,

        handleNHourChange,
        handleNDayOfTheMonthChange,
        handleNMonthChange,
        handleNDayOfTheWeekChange,

  }: GlobalStateContextType = useContext(GlobalContext)

  const index = options.indexOf(selection);
  const isDisplay = index > 1;
  return (
    isDisplay && (
    <div>  
     <SingleSelect
            value={dayOfTheWeek}
            handleChange={handleDayOfTheWeekChange}
            arrayOfOptions={weekdays}
            label={"Set day of the week"}
            startsFromZero={false} valueName={"weekday"} handleCheckChange={handleNDayOfTheWeekChange} isChecked={isNDayOfTheWeek}          /> 
          <MultiSelectComponent
            value={dayOfTheWeek}
            handleChange={handleDayOfTheWeekChange}
            arrayOfOptions={weekdays}
            label={"Select multiple days of the week"}
            startsFromZero={false}
          />
    
    </div>
  )
)
}
