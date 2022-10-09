import React from 'react'
import './Header.scss'
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
    <div className='header'>
        <div className='wrapper'>
            <div className='logo'>
                <Logo/>
            </div>
            <div className='searchbar'>
                <input className='searchbar_input' placeholder='Search'/>
            </div>
            <div className='menu'>
                <Link to='/'>
                     <Home className='icon'/>
                </Link>
                <Link to='/'>
                    <Messages className='icon'/>
                </Link>
                <Link to='/add'>
                    <Add className='icon'/>
                </Link>
                <Link to='/'>
                    <Search className='icon'/>
                </Link>
                <Link to='/'>
                    <Likes className='icon'/>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Header