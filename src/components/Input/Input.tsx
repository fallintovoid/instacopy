import React, { FC } from "react";

import s from "./Input.module.scss";

type Props = {
  placeholder: string;
  id?: string;
  name?: string;
  onChange?: () => void;
};

const Input: FC<Props> = ({ placeholder, id, name, onChange }) => {
  return (
    <input
      onChange={onChange}
      className={s.input}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default Input;
