import React, { FC } from 'react'
import { useAppSelector } from '../../lib/hooks/hooks';
import s from './ProfilePost.module.scss'

type Props = {
    img: string;
}

const ProfilePost: FC<Props> = ({img}) => {
  const status = useAppSelector(state => state.profile.status)
  return (
    <div className={`${s.profilepost} ${status === 'idle' ? s.loading : null}`}>
        <img src={img} alt={img}/>
    </div>
  )
}

export default ProfilePost