import React from 'react'
import Skeleton from 'react-loading-skeleton'

import s from './SkeletonPost.module.scss'

type Props = {}

const SkeltonPost = (props: Props) => {
  return (
    <div className={s.skeleton}>
      <div className={s.info}>
        <Skeleton
          circle
          width={40}
          height={40}/>
        <Skeleton 
          width={140}/>
      </div>
      <div className={s.photo}> 
        <Skeleton
          width={450}
          height={300}/>
      </div>
      <div className={s.description}>
        <Skeleton
          width={450}
          height={100}/>
      </div>
    </div>
  )
}

export default SkeltonPost