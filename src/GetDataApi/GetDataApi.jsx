import { useState, useEffect } from "react";
import s from "./GetDataApi.module.css";

export const GetDataApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <>
      {data.map((el) => (
        <h3>{el.title}</h3>
      ))}
    </>
  );
};
