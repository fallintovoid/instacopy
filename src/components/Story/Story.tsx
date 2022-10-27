import React from "react";
import { Link } from "react-router-dom";

import s from "./Story.module.scss";

type Props = {
  avi: string | null;
  username: string;
  id: string;
};

const Story = ({ avi, username, id }: Props) => {
  const completeAvi = avi ? <img src={avi} alt={avi} /> : null;
  return (
    <Link to={`/${id}`}>
      <div className={s.story}>
        <div className={s.photo}>{completeAvi}</div>
        <p>{username}</p>
      </div>
    </Link>
  );
};

export default Story;
