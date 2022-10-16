import React from 'react'
import s from './Post.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { setLikes, toggleClickAmount } from '../../store/slices/posts/posts'
import { useAppDispatch } from '../../lib/hooks/hooks'

const Post = ({username, avi, img, likes, description, id, liked}: Post) => {
    const dispatch = useAppDispatch()

    const onLikeHandler = (id: string) => {
        if (!liked) {
            dispatch(setLikes({
                id,
                amountOfLikes: 1
            }))
            dispatch(toggleClickAmount({
                id
            }))
        } else {
            dispatch(setLikes({
                id,
                amountOfLikes: -1
            }))
            dispatch(toggleClickAmount({
                id
            }))
        }
    }

    const likeButton = liked
        ? <AiFillHeart 
            onClick={() => onLikeHandler(id)}
            className={s.likebutton}
            size='40'/>

        : <AiOutlineHeart 
            onClick={() => onLikeHandler(id)}
            className={s.likebutton}
            size='40'/>

    return (
        <div className={s.post}>
            <div className={s.post_user}>
                <div className={s.post_user_avi}>
                    <img src={avi} alt={avi}/>
                </div>
                <p>{username}</p>
            </div>
            <div className={s.post_image}>
                <img src={img} alt={img}/>
            </div>
            <div className={s.post_info}>
                <div className={s.post_info_menu}>
                    {likeButton}
                </div>
                <p>{likes} Likes</p>
                <p className={s.post_info_description}>{description ? description : null}</p>
            </div>
        </div>
  )
}

export default Post