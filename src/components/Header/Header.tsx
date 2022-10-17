import React from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { RiProfileFill, RiProfileLine } from 'react-icons/ri'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss'

const Header = () => {
    const { pathname } = useLocation()

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </div>
                <div className={s.searchbar}>
                    <input className={s.searchbar_input} placeholder='Search'/>
                </div>
                <div className={s.menu}>
                    <Link to='/'>
                        {pathname === '/'
                            ? <AiFillHome className={s.icon}/>
                            : <AiOutlineHome className={s.icon}/>}
                        
                    </Link>
                    <Link to='/profile'>
                        {pathname === '/profile'
                            ? <RiProfileFill className={s.icon}/>
                            : <RiProfileLine className={s.icon}/>}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
