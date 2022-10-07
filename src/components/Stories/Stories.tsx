import React, { useEffect } from 'react'
import './Stories.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Story from '../Story/Story'
import { fetchAvi } from '../../store/slices/stories'

type Props = {}

const Stories = (props: Props) => {
  const dispatch = useAppDispatch()
  const { stories, status } = useAppSelector(state => state.stories)

  useEffect((): void => {
    dispatch(fetchAvi(5))
  }, [])

  const storiesList = (stories: Story[] | null): JSX.Element[] | JSX.Element => {
    if (stories) {
      return stories.map(story => {
        return <Story avi={story.avi.large} username={story.username}/>
      })
    } else {
      return <Story avi={null} username={'unknown'}/>
    }
  }

  const storiesComponent = status === 'ok' 
    ? storiesList(stories)
    : null

  return (
    <div className={`stories ${status === 'idle' ? 'loading' : null}`}>
      {storiesComponent}
    </div>
  )
}

export default Stories