import React from "react";

import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={s.lds_heart}>
      <div></div>
    </div>
  );
};

export default Loading;
