import React from 'react'
import { useAppSelector } from '../../lib/hooks/hooks'
import Post from '../Post/Post'
import './PostList.scss'

type Props = {}

const PostList = (props: Props) => {
  const posts = useAppSelector(state => state.posts.posts)

  const renderPostList = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Post avi={post.avi} username={post.username} img={post.img} likes={post.likes}/>
    })
  }

  return (
    <div className='postlist'>
      {renderPostList(posts)}
    </div>
  )
}

export default PostList