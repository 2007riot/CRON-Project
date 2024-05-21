import React, {
  ReactNode,
  createContext,
  ChangeEvent,
  useState,
} from "react";

import { SelectChangeEvent } from "@mui/material";

import {
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
  handleSelectorChange: (event: SelectChangeEvent) => void;
  selection: string
  cron: string[];
  updateCron: (params: CronUpdateParams) => void;
  minute: string[];
  hour: string[];
  dayOfTheMonth: string[];
  month: string[];
  dayOfTheWeek: string[];
  save:() => void

  handleMinuteChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleHourChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleDayOfTheMonthChange: (
    event: SelectChangeEvent<string[] | string>
  ) => void;
  handleMonthChange: (event: SelectChangeEvent<string[] | string>) => void;
  handleDayOfTheWeekChange: (
    event: SelectChangeEvent<string[] | string>
  ) => void;

  handleCronChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoadInterface: (event:React.MouseEvent<HTMLButtonElement>) => void;


  handleNMinChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNHourChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNDayOfTheMonthChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNMonthChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNDayOfTheWeekChange: (event: ChangeEvent<HTMLInputElement>) => void;

  isNmin: boolean;
  isNHour: boolean;
  isNDayOfTheMonth: boolean;
  isNMonth: boolean;
  isNDayOfTheWeek: boolean;
}

type GlobalStateProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalStateContextType>({

  handleSelectorChange:() => {},
  selection: yearly,

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

  handleNMinChange: () => {},
  handleNHourChange: () => {},
  handleNDayOfTheMonthChange: () => {},
  handleNMonthChange: () => {},
  handleNDayOfTheWeekChange: () => {},

  isNmin: false,

  isNHour: false,
  isNDayOfTheMonth: false,
  isNMonth: false,
  isNDayOfTheWeek: false,
  save: ()=>{},
});

export default function GlobalState({ children }: GlobalStateProps) {
  const [selection, setSelection] = React.useState('');
  
  const [cron, setCron] = useState<string[]>([]);
  const [minute, setMinute] = useState<string[]>([]);
  const [hour, setHour] = useState<string[]>([]);
  const [dayOfTheMonth, setDayOfTheMonth] = useState<string[]>([]);
  const [month, setMonth] = useState<string[]>([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string[]>([]);
  const [isNmin, setIsNmin] = useState<boolean>(false);
  const [isNHour, setIsNHour] = useState<boolean>(false);
  const [isNDayOfTheMonth, setIsNDayOfTheMonth] = useState<boolean>(false);
  const [isNMonth, setIsNMontd] = useState<boolean>(false);
  const [isNDayOfTheWeek, setIsNDayOfTheWeek] = useState<boolean>(false);

  const handleSelectorChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value as string);
  }
  function handleCronChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const arrayOfvalues = value.split(" ");
    setCron(arrayOfvalues);
    console.log(cron);
    //here need to add validation 
    
  }

  function hasNpattern(string:string):boolean {
    const regex: RegExp = /^\*\//
    return regex.test(string)
  }


  function save () {
    updateCron({minute:minute,hour:hour,dayOfTheMonth:dayOfTheMonth,month:month,daysOfTheWeek:dayOfTheWeek})
  }

  function handleLoadInterface (event: React.MouseEvent<HTMLButtonElement>) {

    setSelection(yearly)
    const [minute, hour, dayOfTheMonth, month, weekDay] = cron;

    console.log("cron minute: " + minute);
    console.log("cron hour: " + hour);
    console.log("cron day of the month: " + dayOfTheMonth);
    console.log("cron month: " + month);
    console.log("cron week day: " + weekDay);
    
    console.log(hasNpattern(minute));

    // handleNPattern(minute,setIsNmin,)

    //think about it more, very repetative
    if (hasNpattern(minute)) {
      setIsNmin(true);
      const strWTpattern = minute.slice(2);
      setMinute(strWTpattern.split(","));
    } else {
      setIsNmin(false)
      setMinute(minute.split(","));
    }

    if (hasNpattern(hour)) {
      setIsNHour(true);
      const strWTpattern = hour.slice(2);
      setHour(strWTpattern.split(","));
    } else {
      setIsNHour(false)
      setHour(hour.split(","));
    }

    if (hasNpattern(dayOfTheMonth)) {
      setIsNDayOfTheMonth(true);
      const strWTpattern = dayOfTheMonth.slice(2);
      setMinute(strWTpattern.split(","));
    } else {
      setIsNDayOfTheMonth(false)
      setDayOfTheMonth(dayOfTheMonth.split(","));
    }

    if (hasNpattern(month)) {
      setIsNMontd(true);
      const strWTpattern = month.slice(2);
      setMonth(strWTpattern.split(","));
    } else {
      setIsNMontd(false);
      setMonth(month.split(","));
    }

    if (hasNpattern(weekDay)) {
      setIsNDayOfTheWeek(true);
      const strWTpattern = weekDay.slice(2);
      setDayOfTheWeek(strWTpattern.split(","));
    } else {
      setIsNDayOfTheWeek(false);
      setDayOfTheWeek(weekDay.split(","));
    }
  }

  //TODO - create generic function that can handle multiple select change, cause they hve the same logic
  function handleMinuteChange(event: SelectChangeEvent<string[] | string>) {
    event.preventDefault
    const myValues = event.target.value;
    //Array.isArray check if myValues is an array
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues];
    setMinute(values);
  }

  function handleHourChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value;
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues];
    setHour(values);
    console.log(values);
  }
  function handleDayOfTheMonthChange(
    event: SelectChangeEvent<string[] | string>
  ) {
    const myValues = event.target.value;
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues];
    setDayOfTheMonth(values);
    console.log(values);
  }
  function handleMonthChange(event: SelectChangeEvent<string[] | string>) {
    const myValues = event.target.value;
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues];
    setMonth(values);
    console.log(values);
  }

  function handleDayOfTheWeekChange(
    event: SelectChangeEvent<string[] | string>
  ) {
    const myValues = event.target.value;
    const values: string[] = Array.isArray(myValues) ? myValues : [myValues];
    setDayOfTheWeek(values);
    // updateCron({ daysOfTheWeek: values });
    console.log(values);
  }

  //Also too repetative, think about how to handle this logic differently, maybe add another dropdown instead of checkbox
  function handleNMinChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setIsNmin(isChecked);
  }

  function handleNHourChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setIsNHour(isChecked);
  }

  function handleNDayOfTheMonthChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setIsNDayOfTheMonth(isChecked);
  }

  function handleNMonthChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setIsNMontd(isChecked);
  }

  function handleNDayOfTheWeekChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setIsNDayOfTheWeek(isChecked);
  }

  function retriveCron(
    arrOfValues: string[] | undefined, isChecked: boolean
  ): string {
   
    let cronExpression: string = "";

    if (arrOfValues) {
      if (isChecked && arrOfValues.length === 1) {
        cronExpression = `*/${arrOfValues.join(",")}`;
      } else if (arrOfValues.length > 0) {
        cronExpression = arrOfValues.join(",");
      }  
      else {
        cronExpression = "*";
      }
    } else {
      cronExpression = "*";
    }
    return cronExpression;

  }

  function updateCron(params: CronUpdateParams): void {
    const newCron: string[] = [
      retriveCron(params.minute, isNmin),
      retriveCron(params.hour, isNHour),
      retriveCron(params.dayOfTheMonth, isNDayOfTheMonth),
      retriveCron(params.month, isNMonth),
      retriveCron(params.daysOfTheWeek, isNDayOfTheWeek),
    ];
    console.log(newCron);
    setCron(newCron);
  }

  return (
    <GlobalContext.Provider
      value={{
        handleSelectorChange,
        selection,
        cron,
        updateCron,
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
        save,
        isNmin,
        isNHour,
        isNDayOfTheMonth,
        isNMonth,
        isNDayOfTheWeek,
        handleNMinChange,
        handleNHourChange,
        handleNDayOfTheMonthChange,
        handleNMonthChange,
        handleNDayOfTheWeekChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
