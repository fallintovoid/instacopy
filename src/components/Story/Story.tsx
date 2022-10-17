import { FC } from 'react';

import s from './Story.module.scss'

type Props = {
    avi: string | null;
    username: string;
}

const Story: FC<Props> = ({avi, username}) => {
    const completeAvi = avi
        ? <img src={avi} alt={avi}/>
        : null
    return (
        <div className={s.story}>
            <div className={s.photo}>
                {completeAvi}
            </div>
            <p>{username}</p>
        </div>
        
    )
}

export default Story