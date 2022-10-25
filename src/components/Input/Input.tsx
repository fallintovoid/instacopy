import React from "react";

import s from "./Input.module.scss";

type Props = {
  placeholder: string;
  id?: string;
  name?: string;
  onChange?: () => void;
};

const Input = ({ placeholder, id, name, onChange }: Props) => {
  return <input onChange={onChange} className={s.input} placeholder={placeholder} id={id} name={name} />;
};

export default Input;
