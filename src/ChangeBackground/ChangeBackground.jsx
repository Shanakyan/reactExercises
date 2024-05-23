import s from "./ChangeBackground.module.css";

export const ChangeBackground = ({ flag, onClick }) => {
  return (
    <>
      <button
        className={s.changeBackground}
        onClick={onClick}
        // className={flag ? s.black : s.red}
        type="button"
      >
        change background
      </button>
    </>
  );
};
