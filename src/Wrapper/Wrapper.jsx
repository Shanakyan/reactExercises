import s from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
