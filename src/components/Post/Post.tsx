import React, { useState } from 'react'
import './Post.scss'
import { ReactComponent as Like } from '../../images/like.svg';

type Props = {
    username: string,
    avi: string,
    img: string,
    likes: number
}

const Post = ({username, avi, img, likes}: Props) => {

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

    return (
        <div className='post'>
            <div className='post--user'>
                <div className='post--user--avi'>
                    <img src={avi} alt={avi}/>
                </div>
                <p>{username}</p>
            </div>
            <div className='post--image'>
                <img src={img} alt={img}/>
            </div>
            <div className='post--info'>
                <div className='post--info--menu'>
                    <Like 
                        onClick={onLikeHandler}
                        className='likebutton'/>
                </div>
                <p>{likeAmount} Likes</p>
            </div>
        </div>
  )
}

export default Post