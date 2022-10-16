import React, { useEffect } from 'react'
import ProfilePost from '../../components/ProfilePost/ProfilePost'
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks'
import { getPostsForProfile } from '../../store/slices/profile/profile'
import { AiFillSetting } from 'react-icons/ai'

import s from './Profile.module.scss'
import { Link } from 'react-router-dom'

type Props = {}

const Profile = (props: Props) => {
    const dispatch = useAppDispatch()
    const { profileAvi, username, subscribed, subscribers, posts, description, status } = useAppSelector(state => state.profile)

    useEffect(() => {
        dispatch(getPostsForProfile())
    }, [])

    return (
        <div className={s.profile}>
            <div className={s.profile_information}>
                <div className={s.profile_information_avi}>
                    <div className={s.profile_information_avi_wrapper}>
                        <img src={profileAvi} alt={profileAvi}/>
                    </div>
                </div>
                <div className={s.profile_information_info}>
                    <div className={s.profile_information_info_username}>
                        <p>{username}</p>
                        <Link to='settings'>
                            <AiFillSetting
                                size={25}/>
                        </Link>
                        
                    </div>
                    <div className={s.profile_information_info_statistic}>
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
                    <div className={s.profile_information_info_description}>
                        {description}
                    </div>
                </div>
            </div>
            

            <div className={s.profile_posts}>
                {status === 'ok' && posts.map((item: Post): JSX.Element => {
                    return <ProfilePost
                        img={item.img}
                        key={item.id}/>
                })}

                {status === 'idle' && <ProfilePost/>}
            </div>
        </div>
    )
}

export default Profile