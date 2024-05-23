import s from "./CountBtn.module.css";

export const CountBtn = ({ count, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className={s.countBtn} type="button">
        {count}
      </button>
    </div>
  );
};
