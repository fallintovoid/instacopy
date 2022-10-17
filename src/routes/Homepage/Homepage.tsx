import React from 'react'
import Stories from '../../components/Stories/Stories'
import PostList from '../../components/PostList/PostList'
import Profile from '../../components/Profile/Profile'
import './Homepage.scss'


type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <main className="feed-column">
                <Stories/>
                <PostList/>
            </main>
            <aside className="aside-column">
                <Profile/>
            </aside>
        </>
    )
}

export default Homepage
