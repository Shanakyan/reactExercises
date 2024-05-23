import { useState, useEffect } from "react";
import s from "./TimerUsingUseEffect.module.css";
import { clear } from "@testing-library/user-event/dist/clear";

export const TimerUsingUseEffect = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0);
  const handleTime = () => {
    setTime(new Date().toLocaleTimeString());
    setTimer(timer + 1);
  };

  useEffect(() => {
    const interval = setInterval(handleTime, 1000);
    console.log("timer");
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <>
      <h3>{time}</h3>
      <button className={s.btn} type="button">
        {timer}
      </button>
    </>
  );
};
