import './Story.scss'

type Props = {
    avi: string | null;
    username: string;
}

const Story = ({avi, username}: Props) => {
    const completeAvi = avi
        ? <img src={avi} alt={avi}/>
        : null
    return (
        <div className='story'>
            <div className='photo'>
                {completeAvi}
            </div>
            <p>{username}</p>
        </div>
        
    )
}

export default Story