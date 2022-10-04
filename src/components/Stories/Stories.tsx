import React, { useEffect } from 'react'
import './Stories.scss'
import HorizontalScroll from 'react-scroll-horizontal'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Story from '../Story/Story'
import { fetchAvi } from '../../store/slices/stories'

type Props = {}

const Stories = (props: Props) => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.stories.users)

  useEffect((): void => {
    for(let i = 0; i < 10; i++) {
      dispatch(fetchAvi())
    }
  }, [])

  const stories = (users: User[] | null): JSX.Element[] => {
    return users!.map(user => {
      return <Story avi={user.avi}/>
    })
  }

  return (
    <div className='stories'>
      <HorizontalScroll>
        {stories(users)}
      </HorizontalScroll>
    </div>
  )
}

export default Stories