import s from "./Button.module.css";

export const Button = ({ toggle, clickBtn }) => {
  return (
    <button className={s.btn} type="button" onClick={clickBtn}>
      {toggle ? "Выключено" : "Включено"}
    </button>
  );
};
