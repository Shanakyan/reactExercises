import s from "./ShowText.module.css";

export const ShowText = ({ showText, handleText }) => {
  return (
    <>
      <button className={s.showText} onClick={handleText} type="button">
        {!showText ? "show text" : "hide text"}
      </button>
      {showText && <p>Здесь показан текст!</p>}
    </>
  );
};
