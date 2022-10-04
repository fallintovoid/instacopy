import React from 'react'
import './Story.scss'

type Props = {
    avi: string
}

const Story = ({avi}: Props) => {
    const completeAvi = avi
        ? <img src={avi} alt={avi}/>
        : null
    return (
        <div className='story'>
            {completeAvi}
        </div>
    )
}

export default Story