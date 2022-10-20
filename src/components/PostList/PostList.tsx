import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useAppSelector } from '../../lib/hooks/hooks'
import Post from '../Post/Post'
import s from './PostList.module.scss'
import SkeltonPost from '../Post/SkeletonPost/SkeltonPost'


type Props = {}

const PostList = (props: Props) => {
  const { posts, status } = useAppSelector(state => state.posts)

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
      {status === 'ok' && renderPostList(posts)}
      {status === 'ok' && <SkeltonPost />}
        
    </div>
  )
}

export default PostList