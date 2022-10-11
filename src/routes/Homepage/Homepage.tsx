import React from 'react'
import Stories from '../../components/Stories/Stories'
import PostList from '../../components/PostList/PostList'
import Profile from '../../components/Profile/Profile'
import './Homepage.scss'


type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <div className="main">
                <Stories/>
                <PostList/>
            </div>
            <div className='profile'>
                <Profile/>
            </div>
        </>
    )
}

export default Homepage