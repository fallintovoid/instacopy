import React, { FC } from 'react'
import s from './ProfilePost.module.scss'

type Props = {
    img: string;
}

const ProfilePost: FC<Props> = ({img}) => {
  return (
    <div className={s.profilepost}>
        <img src={img} alt={img}/>
    </div>
  )
}

export default ProfilePost