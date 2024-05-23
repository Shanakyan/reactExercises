import { useState, useEffect } from "react";
import s from "./UpDateTitle.module.css";

export const UpDateTitle = () => {
  const [name, setName] = useState("Нарине");
  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* <h1>Привет {name}!</h1> */}
    </div>
  );
};
