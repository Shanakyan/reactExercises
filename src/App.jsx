import { useState, useEffect } from "react";

import "./App.css";
import { Button } from "./Button/Button";
import { CountBtn } from "./CountBtn/CountBtn";
// import { GetText } from "./GetText/getText";
import { GetText } from "./GetText/getText";
import { ShowText } from "./ShowText/ShowText";
import { ChangeBackground } from "./ChangeBackground/ChangeBackground";
import { Wrapper } from "./Wrapper/Wrapper";
import { Todo } from "./Todo/Todo";
import { TodoForm } from "./TodoForm/TodoForm";
import { BirthComponent } from "./BirthComponent/BirthComponent";
import { ChangeComponent } from "./ChangeComponent/ChangeComponent";
import { DefaultValue } from "./DefaultValue /DefaultValue ";
import { UpDateTitle } from "./UpDateTitle/UpDateTitle";
import { TimerUsingUseEffect } from "./TimerUsingUseEffect/TimerUsingUseEffect";
import { GetDataApi } from "./GetDataApi/GetDataApi";

function App() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("text");
  const [showText, setShowText] = useState(false);
  const [changeBachground, setchangeBachground] = useState(false);
  const [todos, setTodo] = useState([]);
  const [defaultValue, setdefaultValue] = useState("");

  //1 задача
  const handleClick = () => {
    setCount(count + 1);
  };
  //2 задача
  const clickBtn = () => {
    setToggle(!toggle);
  };
  //3 задача
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  //4 задача
  const handleText = () => {
    setShowText(!showText);
  };
  // 5
  const handleChangeBackground = () => {
    setchangeBachground(!changeBachground);
    if (changeBachground) {
      document.body.style.backgroundColor = "red";
    } else document.body.style.backgroundColor = "green";
  };
  //6 задача
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complate: false,
      };
      setTodo([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodo([...todos.filter((todo) => todo.id != id)]);
  };

  const handleToggle = (id) => {
    setTodo([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  console.log("Перерендер");
  return (
    <>
      <Wrapper>
        <h3>TodoList</h3>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          );
        })}

        <h3> Переключатель состояния</h3>
        <Button toggle={toggle} clickBtn={clickBtn} />
        <h3>Счетчик</h3>
        <CountBtn count={count} handleClick={handleClick} />
        <h3>Отображать введенный текст</h3>
        <GetText input={input} handleInput={handleInput} />
        <h3>Управление видимостью элемента</h3>
        <ShowText showText={showText} handleText={handleText} />
        <h3>Смена темы</h3>
        <ChangeBackground
          flag={changeBachground}
          onClick={handleChangeBackground}
        />
        <h3>Логирование первого рендера компонента</h3>
        <BirthComponent />
        <h3>Логирование изменения состояния</h3>
        <ChangeComponent count={count} handleClick={handleClick} />
        <h3> Установка значения по умолчанию</h3>
        <DefaultValue
          defaultValue={defaultValue}
          setdefaultValue={setdefaultValue}
        />
        <h3>Обновление заголовка страницы</h3>
        <UpDateTitle />
        <h3>Таймер с использованием useEffect</h3>
        <TimerUsingUseEffect />
        <h3> Получение данных с API</h3>

        <GetDataApi />
      </Wrapper>
    </>
  );
}

export default App;
