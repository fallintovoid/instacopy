import React, { FC } from 'react'
import { useAppSelector } from '../../lib/hooks/hooks';
import s from './ProfilePost.module.scss'

type Props = {
    img?: string;
}

const ProfilePost: FC<Props> = ({img}) => {
  if (img) {
    return (
      <div className={s.profilepost}>
          <img src={img} alt={img}/>
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