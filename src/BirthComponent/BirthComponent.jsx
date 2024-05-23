import { useEffect } from "react";
import s from "./BirthComponent.module.css";

export const BirthComponent = () => {
  useEffect(() => console.log("я родился!"), []);

  return (
    <div>
      <button className={s.btn} type="button">
        я родился!
      </button>
    </div>
  );
};
