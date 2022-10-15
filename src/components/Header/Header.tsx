import React from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Add } from '../../images/add.svg';
import { RiProfileFill, RiProfileLine } from 'react-icons/ri'
import { AiOutlineHome, AiFillHome } from 'react-icons/ai'
import { IoMdAddCircleOutline, IoMdAddCircle } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
    const { pathname } = useLocation()

    return (
        <div className={s.header}>
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
                    <Link to='/add'>
                        {pathname === '/add'
                            ? <IoMdAddCircle className={s.icon}/>
                            : <IoMdAddCircleOutline className={s.icon}/>}
                    </Link>
                    <Link to='/profile'>
                        {pathname === '/profile'
                            ? <RiProfileFill className={s.icon}/>
                            : <RiProfileLine className={s.icon}/>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header