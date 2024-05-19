import React, {
  ReactNode,
  createContext,
  ChangeEvent,
  useState,
  useEffect,
} from "react";

import { SelectChangeEvent } from "@mui/material";

import {
  custom,
  daily,
  hourly,
  monthly,
  weekly,
  yearly,
} from "../constants/constants";

interface CronUpdateParams {
  minute?: string[];
  hour?: string[];
  dayOfTheMonth?: string[];
  month?: string[];
  daysOfTheWeek?: string[];
}

export interface GlobalStateContextType {
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isHourly: boolean,
  isDaily: boolean,
  isWeekly: boolean,
  isMonthly: boolean,
  isYearly: boolean,
  isCustom: boolean,
  cron: string[],
  updateCron: (params: CronUpdateParams) => void;
  minute: string[];
  hour: string[];
  dayOfTheMonth: string[];
  month: string[];
  dayOfTheWeek: string[];

  handleMinuteChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleHourChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleDayOfTheMonthChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleMonthChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleDayOfTheWeekChange: (event: SelectChangeEvent<string[] | string>) => void;


  handleCronChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoadInterface: () => void;
}

type GlobalStateProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalStateContextType>({
  handleRadioChange: () => {},
  isHourly: false,
  isDaily: false,
  isWeekly: false,
  isMonthly: false,
  isYearly: false,
  isCustom: false,
  cron: [],
  updateCron: () => {},
  minute: [],
  hour: [],
  dayOfTheMonth: [],
  month: [],
  dayOfTheWeek: [],
  handleDayOfTheWeekChange: () => {},
  handleDayOfTheMonthChange: () => {},
  handleMinuteChange: () => {},
  handleHourChange: () => {},
  handleCronChange: () => {},
  handleLoadInterface: () => {},
  handleMonthChange: () => {},
})

export default function GlobalState({ children }: GlobalStateProps) {
  const [isHourly, setIsHourly] = useState<boolean>(false);
  const [isDaily, setIsDaily] = useState<boolean>(false);
  const [isWeekly, setIsWeekly] = useState<boolean>(false);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [cron, setCron] = useState<string[]>([]);
  const [minute, setMinute] = useState<string[]>([]);
  const [hour, setHour] = useState<string[]>([]);
  const [dayOfTheMonth, setDayOfTheMonth] = useState<string[]>([]);
  const [month, setMonth] = useState<string[]>([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string[]>([]);

  useEffect(() => {
    updateCron({
      hour: hour,
      minute: minute,
      dayOfTheMonth: dayOfTheMonth,
      month: month,
      daysOfTheWeek: dayOfTheWeek,
    })
  }, [hour, minute, dayOfTheMonth, month, dayOfTheWeek])

 

  function handleCronChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const arrayOfvalues = value.split(" ")
    setCron(arrayOfvalues)
    console.log(cron[0]);
  }

  function handleLoadInterface() {
    setIsHourly(false);
    setIsDaily(false);
    setIsWeekly(false);
    setIsMonthly(false);
    setIsYearly(false);
    setIsCustom(true);
    // console.log(cron)
    const [minute, hour, dayOfTheMonth, month, weekDay] = cron

    console.log("cron minute: " + minute)
    console.log("cron hour: " + hour)
    console.log("cron day of the month: " + dayOfTheMonth)
    console.log("cron month: " + month)
    console.log("cron week day: " + weekDay)

    setMinute(minute.split(","))
    setHour(hour.split(","))
    setDayOfTheMonth(dayOfTheMonth.split(","))
    setMonth(month.split(","))
    setDayOfTheWeek(weekDay.split(","))
  }

  //TODO - create generic function that can handle multiple select change, cause they hve the same logic
  function handleMinuteChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value
    //Array.isArray check if myValues is an array
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues]
    setMinute(values)
    updateCron({ minute: values })
  }

  function handleHourChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues]
    setHour(values)
    updateCron({ hour: values })
    console.log(values)
  }
  function handleDayOfTheMonthChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues]
    setDayOfTheMonth(values);
    updateCron({ dayOfTheMonth: values });
    console.log(values);
  }
  function handleMonthChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues]
    setMonth(values)
    updateCron({ month: values })
    console.log(values)
  }

  function handleDayOfTheWeekChange(event: SelectChangeEvent<string[]| string>) {
    const myValues = event.target.value
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues]
    setDayOfTheWeek(values)
    updateCron({ daysOfTheWeek: values })
    console.log(values)
  }

  function handleRadioChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, checked } = e.target;
    switch (name) {
      case hourly:
        setIsHourly(checked);
        setIsDaily(false);
        setIsWeekly(false);
        setIsMonthly(false);
        setIsYearly(false);
        setIsCustom(false);
        setCron(["0", "*", "*", "*", "*"]);
        break;
      case daily:
        setIsHourly(false);
        setIsDaily(checked);
        setIsWeekly(false);
        setIsMonthly(false);
        setIsYearly(false);
        setIsCustom(false);
        setCron(["0", "0", "*", "*", "*"]);
        break;
      case weekly:
        setIsHourly(false);
        setIsDaily(false);
        setIsWeekly(checked);
        setIsMonthly(false);
        setIsYearly(false);
        setIsCustom(false);
        setCron(["0", "0", "*", "*", "0"]);
        break;
      case monthly:
        setIsHourly(false);
        setIsDaily(false);
        setIsWeekly(false);
        setIsMonthly(checked);
        setIsYearly(false);
        setIsCustom(false);
        setCron(["0", "0", "1", "*", "*"]);
        break;
      case yearly:
        setIsHourly(false);
        setIsDaily(false);
        setIsWeekly(false);
        setIsMonthly(false);
        setIsYearly(checked);
        setIsCustom(false);
        setCron(["0", "0", "1", "1", "*"]);
        break;
      case custom:
        setIsHourly(false);
        setIsDaily(false);
        setIsWeekly(false);
        setIsMonthly(false);
        setIsYearly(false);
        setIsCustom(checked);
        setCron(["*", "*", "*", "*", "*"]);
        break;
      default:
        break;
    }
  }

  function updateCron(params: CronUpdateParams): void {
    const newCron: string[] = [
      params.minute
        ? params.minute.length > 0
          ? params.minute.join(",")
          : "*"
        : "*",
      params.hour
        ? params.hour.length > 0
          ? params.hour.join(",")
          : "*"
        : "*",
      params.dayOfTheMonth
        ? params.dayOfTheMonth.length > 0
          ? params.dayOfTheMonth.join(",")
          : "*"
        : "*",
      params.month
        ? params.month.length > 0
          ? params.month.join(",")
          : "*"
        : "*",
      params.daysOfTheWeek
        ? params.daysOfTheWeek.length > 0
          ? params.daysOfTheWeek.join(",")
          : "*"
        : "*",
    ];
    setCron(newCron);
  }

  return (
    <GlobalContext.Provider
      value={{
        isHourly,
        handleRadioChange,
        isDaily,
        isWeekly,
        isMonthly,
        isYearly,
        cron,
        updateCron,
        isCustom,
        minute,
        hour,
        month,
        dayOfTheMonth,
        dayOfTheWeek,
        handleDayOfTheWeekChange,
        handleDayOfTheMonthChange,
        handleHourChange,
        handleMinuteChange,
        handleCronChange,
        handleLoadInterface,
        handleMonthChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
