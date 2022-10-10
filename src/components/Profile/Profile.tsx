import React from 'react'
import s from './Profile.module.scss'

type Props = {}

const Profile = (props: Props) => {

    const url = 'https://images.unsplash.com/photo-1612018941629-71e929b5403f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <div className={s.profile}>
            <div className={s.profile_photo}>
                <img src={url} alt='some'/>
            </div>
            <div className={s.profile_info}>
                <p>fellintovoid</p>
                <p>zhmych) karayu)</p>
            </div>
        </div>
    )
}

export default Profile