import React, {
  ReactNode,
  createContext,
  ChangeEvent,
  useState,
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
  isHourly: boolean;
  isDaily: boolean;
  isWeekly: boolean;
  isMonthly: boolean;
  isYearly: boolean;
  isCustom: boolean;
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
  const [isNmin, setIsNmin] = useState<boolean>(false);
  const [isNHour, setIsNHour] = useState<boolean>(false);
  const [isNDayOfTheMonth, setIsNDayOfTheMonth] = useState<boolean>(false);
  const [isNMonth, setIsNMontd] = useState<boolean>(false);
  const [isNDayOfTheWeek, setIsNDayOfTheWeek] = useState<boolean>(false);
  // useEffect(() => {
  //   updateCron({
  //     hour: hour,
  //     minute: minute,
  //     dayOfTheMonth: dayOfTheMonth,
  //     month: month,
  //     daysOfTheWeek: dayOfTheWeek,
  //   });
  // }, [hour, minute, dayOfTheMonth, month, dayOfTheWeek],);

  function handleCronChange(e: ChangeEvent<HTMLInputElement>) {
    // e.preventDefault
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

//   function handleNPattern(value: string[], stateSetter: (values: string[]) => void, isNStateSetter: (isChecked: boolean) => void, pattern = /^\*\//): boolean {
//   const hasNpattern = pattern.test(value[0]);

//   if (hasNpattern) {
//     isNStateSetter(true);
//     const strWTpattern = value[0].slice(2);
//     stateSetter(strWTpattern.split(",")); 
//   } else {
//     isNStateSetter(false);
//     stateSetter(value); 
//   }

//   return hasNpattern; 
// }

  function save () {
    updateCron({minute:minute,hour:hour,dayOfTheMonth:dayOfTheMonth,month:month,daysOfTheWeek:dayOfTheWeek})
  }

  function handleLoadInterface (event: React.MouseEvent<HTMLButtonElement>) {

    setIsHourly(false);
    setIsDaily(false);
    setIsWeekly(false);
    setIsMonthly(false);
    setIsYearly(false);
    setIsCustom(true);
    // console.log(cron)
    const [minute, hour, dayOfTheMonth, month, weekDay] = cron;

    console.log("cron minute: " + minute);
    console.log("cron hour: " + hour);
    console.log("cron day of the month: " + dayOfTheMonth);
    console.log("cron month: " + month);
    console.log("cron week day: " + weekDay);

    // setMinute(minute.split(","));
    // setHour(hour.split(","));
    // setDayOfTheMonth(dayOfTheMonth.split(","));
    // setMonth(month.split(","));
    // setDayOfTheWeek(weekDay.split(","));
    
    console.log(hasNpattern(minute));

    // handleNPattern(minute,setIsNmin,)

    //think about it more
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

  //TODO generic function as well
  // function handleNMinChange(event: ChangeEvent<HTMLInputElement>) {
  //   const isChecked = event.target.checked;
  //   setIsNmin(isChecked);
  //   //cron should updates here??
  //   // if (isChecked && minute.length === 1)  {
  //   //   //thiiiiink
  //   //   updateCron({minute:[`*/${minute}`]});
  //   // } 
  //   // else {
  //   //   updateCron({minute:minute});
  //   // }
  //   console.log(minute);
  // }


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
      // retriveCron(params.hour, isNHour),
      // retriveCron(params.dayOfTheMonth, isNDayOfTheMonth),
      // retriveCron(params.month, isNMonth),
      // retriveCron(params.daysOfTheWeek, isNDayOfTheWeek),
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
