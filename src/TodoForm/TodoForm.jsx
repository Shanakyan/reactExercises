import { useState } from "react";
import s from "./TodoForm.module.css";

export const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          //   onKeyDown={handleKeyPress}
          placeholder="Введите текст..."
        />
        <button>Сохранить</button>
      </form>
    </>
  );
};
