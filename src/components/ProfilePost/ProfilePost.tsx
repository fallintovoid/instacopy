import React, { FC } from 'react'
import s from './ProfilePost.module.scss'
import { AiFillHeart } from 'react-icons/ai'

type Props = {
    img?: string;
    likes?: number;
}

const ProfilePost: FC<Props> = ({img, likes}) => {
  if (img) {
    return (
      <div className={s.profilepost}>
          <img src={img} alt={img}/>
          <div className={s.likes}>
            <AiFillHeart
              size={25}/>
            <h1>{likes}</h1>
          </div>
      </div>
    )
  }

  else {
    return (
      <div className={`${s.profilepost} ${s.loading}`}></div>
    )
  }
  
}

export default ProfilePost