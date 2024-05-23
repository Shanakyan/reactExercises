import { useEffect } from "react";
import s from "./ChangeComponent.module.css";

export const ChangeComponent = ({ handleClick, count }) => {
  useEffect(
    () => console.log(`Состояние компонента изменился ${count} раз`),
    [count]
  );
  return (
    <>
      <button onClick={handleClick} className={s.btn} type="button">
        {count}
      </button>
    </>
  );
};
