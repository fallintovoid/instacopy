import React from 'react'
import { useAppSelector } from '../../lib/hooks/hooks'
import Post from '../Post/Post'
import s from './PostList.module.scss'


type Props = {}

const PostList = (props: Props) => {
  const posts = useAppSelector(state => state.posts.posts)

  const renderPostList = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Post 
        avi={post.avi} 
        username={post.username} 
        img={post.img} 
        likes={post.likes}
        description={post.description}
        key={post.img}
        id={post.id}
        liked={post.liked}/>
    })
  }

  return (
    <div className={s.postlist}>
      {renderPostList(posts)}
    </div>
  )
}

export default PostList