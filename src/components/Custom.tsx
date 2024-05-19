import { useContext } from "react";
import { GlobalContext, GlobalStateContextType } from "../context/Context";
import MultiSelectComponent from "./Multiselect";
import SingleSelect from "./SingleSelect";

export default function Custom() {
  const {
    isCustom,
    handleRadioChange,
    minute, handleMinuteChange,
    hour, handleHourChange,
    dayOfTheMonth, handleDayOfTheMonthChange,
    month, handleMonthChange,
    dayOfTheWeek, handleDayOfTheWeekChange
  }: GlobalStateContextType = useContext(GlobalContext)

  const minutes = [...Array(60).keys()].map((i) => i )
  const hours = [...Array(24).keys()].map((i) => i )
  const daysOfTheMonth = [...Array(31).keys()].map((i) => i + 1)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

  return (
    <>
      <label>
        <input
          type="radio"
          name="custom"
          checked={isCustom}
          onChange={handleRadioChange}
        />
        Custom:
      </label>
      {isCustom && (
        
        <div className="custom-container">
        <SingleSelect
            value={minute}
            handleChange={handleMinuteChange}
            arrayOfOptions={minutes}
            label={"Set minute"}
            startsFromZero={true}         
             />
          <MultiSelectComponent
            value={minute}
            handleChange={handleMinuteChange}
            arrayOfOptions={minutes}
            label={"Select multiple minutes"}
            startsFromZero={true}         
             />
            
          <SingleSelect
            value={hour}
            handleChange={handleHourChange}
            arrayOfOptions={hours}
            label={"Set hour"}
            startsFromZero={true}       
             />
          <MultiSelectComponent
            value={hour}
            handleChange={handleHourChange}
            arrayOfOptions={hours}
            label={"Select multiple hours"}
            startsFromZero={true}
          />
          <SingleSelect
            value={dayOfTheMonth}
            handleChange={handleDayOfTheMonthChange}
            arrayOfOptions={daysOfTheMonth}
            label={"Set day of the month"}
            startsFromZero={false}
          />
          <MultiSelectComponent
            value={dayOfTheMonth}
            handleChange={handleDayOfTheMonthChange}
            arrayOfOptions={daysOfTheMonth}
            label={"Select multiple days of the month"}
            startsFromZero={false}
          />
          <SingleSelect
            value={month}
            handleChange={handleMonthChange}
            arrayOfOptions={months}
            label={"Set month"}
            startsFromZero={false}
          />
          <MultiSelectComponent
            value={month}
            handleChange={handleMonthChange}
            arrayOfOptions={months}
            label={"Select multiple months"}
            startsFromZero={false}
          />
          
           <SingleSelect
            value={dayOfTheWeek}
            handleChange={handleDayOfTheWeekChange}
            arrayOfOptions={weekdays}
            label={"Set day of the week"}
            startsFromZero={false}
          />
          <MultiSelectComponent
            value={dayOfTheWeek}
            handleChange={handleDayOfTheWeekChange}
            arrayOfOptions={weekdays}
            label={"Select multiple days of the week"}
            startsFromZero={false}
          />
        </div> 
      )}
    </>
  )
}
