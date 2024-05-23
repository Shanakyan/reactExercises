import s from "./Todo.module.css";

export const Todo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div key={todo.id} className={s.item_todo}>
      <div onClick={() => toggleTask(todo.id)}>{todo.task}</div>
      <div className={s.item_remove} onClick={() => removeTask(todo.id)}>
        &times;
      </div>
    </div>
  );
};
