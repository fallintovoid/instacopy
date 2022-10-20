import React from 'react'
import s from './Stories.module.scss'
import { useAppSelector } from '../../lib/hooks/hooks'
import Skeleton from 'react-loading-skeleton' 
import Story from '../Story/Story'

type Props = {}

const Stories = (props: Props) => {
  
  const { stories, status } = useAppSelector(state => state.stories)

  const storiesList = (stories: User[] | null): JSX.Element[] | JSX.Element => {
    return stories!.map(story => {
      return <Story avi={story.avi.large} username={story.username} key={story.username}/>
    })
  }

  return (
    <div className={s.stories}>
      {status === 'ok' && storiesList(stories)}
      {status === 'idle' && <Skeleton height={70} width={70} count={5} inline circle style={{"marginLeft": 10}}/>}
    </div>
  )
}

export default Stories