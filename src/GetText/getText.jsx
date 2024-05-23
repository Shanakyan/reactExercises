import s from "./getText.module.css";

export const GetText = ({ input, handleInput }) => {
  // console.log(input, handleInput);
  const getInput = (e) => {
    handleInput(e);
  };

  return (
    <div>
      <input
        // value={input}
        placeholder="Введите текст"
        type="text"
        onChange={getInput}
      />
      <p>{input}</p>
    </div>
  );
};
