import { GlobalContext, GlobalStateContextType } from "../context/Context";
import { useContext } from "react";
import { daily, hourly, monthly, weekly, yearly } from "../constants/constants"
import './Macros.css'

export default function Macros() {
  const { isHourly, isDaily, isWeekly, isMonthly, isYearly, handleRadioChange }: GlobalStateContextType =
    useContext(GlobalContext)
  return (
    <>
      Macro:
      <div className="macros-container">

      <label>
          <input
            type="radio"
            name={hourly}
            checked={isHourly}
            onChange={handleRadioChange}
          />
          {`@${hourly}`}
        </label>
        <label>
          <input
            type="radio"
            name={daily}
            checked={isDaily}
            onChange={handleRadioChange}
          />
          {`@${daily} or @midnight`}
        </label>

         <label>
          <input
            type="radio"
            name={weekly}
            checked={isWeekly}
            onChange={handleRadioChange}
          />
          {`@${weekly}`}
        </label>

        <label>
          <input
            type="radio"
            name={monthly}
            checked={isMonthly}
            onChange={handleRadioChange}
          />
          {`@${monthly}`}
        </label>

        <label>
          <input
            type="radio"
            name={yearly}
            checked={isYearly}
            onChange={handleRadioChange}
          />
          {`@${yearly} or @annually`}
        </label>

        
      </div>
    </>
  )
}
