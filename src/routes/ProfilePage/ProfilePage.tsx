import { useEffect } from "react";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import { getPostsForProfile } from "../../store/slices/profile/profile";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { StateStatus } from "../../common";

import s from "./ProfilePage.module.scss";

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useAppDispatch();
  const {
    profileAvi,
    username,
    subscribed,
    subscribers,
    posts,
    description,
    status,
    photoStatus,
  } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getPostsForProfile());
  }, [dispatch]);

  useEffect(() => {
    document.title = username;
  }, [username]);

  return (
    <div className={s.profile}>
      <div className={s.information}>
        <div className={s.avi}>
          {photoStatus === StateStatus.OK && (
            <div className={s.wrapper}>
              <img src={profileAvi} alt={profileAvi} />
            </div>
          )}
          {photoStatus === StateStatus.IDLE && (
            <Skeleton circle width={170} height={170} />
          )}
        </div>
        <div className={s.userinfo}>
          <div className={s.username}>
            <p>{username}</p>
            <Link to="settings">
              <AiFillSetting size={25} />
            </Link>
          </div>
          <div className={s.statistic}>
            <p>
              <span className={s.number}>{posts.length}</span> posts
            </p>
            <p>
              <span className={s.number}>{subscribers}</span> followers
            </p>
            <p>
              <span className={s.number}>{subscribed}</span> followed
            </p>
          </div>
          <div className={s.description}>{description}</div>
        </div>
      </div>

      <div className={s.posts}>
        {status === StateStatus.OK &&
          posts.map((item: Post): JSX.Element => {
            return <ProfilePost post={item} key={item.id} />;
          })}
        {status === StateStatus.IDLE && <Skeleton width={220} height={300} />}
      </div>
    </div>
  );
};

export default Profile;
