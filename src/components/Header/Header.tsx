import React from 'react'
import s from './Header.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Messages } from '../../images/messages.svg';
import { ReactComponent as Add } from '../../images/add.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import { ReactComponent as Likes } from '../../images/likes.svg';
import { Link } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <Logo/>
            </div>
            <div className={s.searchbar}>
                <input className={s.searchbar_input} placeholder='Search'/>
            </div>
            <div className={s.menu}>
                <Link to='/'>
                     <Home className={s.icon}/>
                </Link>
                <Link to='/'>
                    <Messages className={s.icon}/>
                </Link>
                <Link to='/add'>
                    <Add className={s.icon}/>
                </Link>
                <Link to='/'>
                    <Search className={s.icon}/>
                </Link>
                <Link to='/'>
                    <Likes className={s.icon}/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Header