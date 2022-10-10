import React, { useState } from 'react'
import s from './Post.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const Post = ({username, avi, img, likes, description}: Post) => {

    const [likeAmount, setLikeAmount] = useState(likes)
    const [clickAmount, setClickAmount] = useState(0)

    const onLikeHandler = () => {
        if (clickAmount === 0) {
            setLikeAmount(prev => prev + 1)
            setClickAmount(1)
        } else {
            setLikeAmount(prev => prev - 1)
            setClickAmount(0)
        }
    }

    const likeButton = clickAmount 
        ? <AiFillHeart 
            onClick={onLikeHandler}
            className={s.likebutton}
            size='40'/>

        : <AiOutlineHeart 
            onClick={onLikeHandler}
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
                <p>{likeAmount} Likes</p>
                <p>{description ? description : null}</p>
            </div>
        </div>
  )
}

export default Post