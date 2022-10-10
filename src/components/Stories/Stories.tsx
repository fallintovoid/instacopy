import React from 'react'
import s from './Stories.module.scss'
import { useAppSelector } from '../../lib/hooks/hooks'
import Story from '../Story/Story'

type Props = {}

const Stories = (props: Props) => {
  
  const { stories, status } = useAppSelector(state => state.stories)

  const storiesList = (stories: User[] | null): JSX.Element[] | JSX.Element => {
    if (stories) {
      return stories.map(story => {
        return <Story avi={story.avi.large} username={story.username} key={story.username}/>
      })
    } else {
      return <Story avi={null} username={'unknown'}/>
    }
  }

  const storiesComponent = status === 'ok' 
    ? storiesList(stories)
    : null

  return (
    <div className={`${s.stories} ${status === 'idle' ? 'loading' : null}`}>
      {storiesComponent}
    </div>
  )
}

export default Stories