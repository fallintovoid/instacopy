import React from 'react'
import { useAppSelector } from '../../lib/hooks/hooks'
import s from './Profile.module.scss'

type Props = {}

const Profile = (props: Props) => {

    const { profileAvi, username, subscribed, subscribers, posts, description} = useAppSelector(state => state.profile)

    return (
        <div className={s.profile}>
            <div className={s.profile_avi}>
                <div className={s.profile_avi_wrapper}>
                    <img src={profileAvi} alt={profileAvi}/>
                </div>
            </div>
            <div className={s.profile_info}>
                <div className={s.profile_info_username}>
                    <p>{username}</p>
                </div>
                <div className={s.profile_info_statistic}>
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
                <div className={s.profile_info_description}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Profile