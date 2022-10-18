import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../lib/hooks/hooks'
import s from './Profile.module.scss'

type Props = {}

const Profile = (props: Props) => {

    const { username, description, profileAvi } = useAppSelector(state => state.profile)

    return (
        <div className={s.profile}>
            <Link to='profile'>
                <div className={s.photo}>
                    <img src={profileAvi} alt='some'/>
                </div>
            </Link>
            <div className={s.info}>
                <Link to='profile'>
                    <p className={s.username}>{username}</p>
                </Link>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    )
}

export default Profile
