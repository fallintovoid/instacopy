import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../lib/hooks/hooks";
import { StateStatus } from "../../common";

import s from "./Profile.module.scss";

const Profile = () => {
  const { username, description, profileAvi, photoStatus } = useAppSelector((state) => state.profile);

  return (
    <div className={s.profile}>
      <Link to="profile">
        {photoStatus === StateStatus.OK && (
          <div className={s.photo}>
            <img src={profileAvi} alt="some" />
          </div>
        )}
        {photoStatus === StateStatus.IDLE && <Skeleton width={80} height={80} circle />}
      </Link>
      <div className={s.info}>
        <Link to="profile">
          <p className={s.username}>{username}</p>
        </Link>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
