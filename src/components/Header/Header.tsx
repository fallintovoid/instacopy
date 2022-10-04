import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Messages } from '../../images/messages.svg';
import { ReactComponent as Add } from '../../images/add.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import { ReactComponent as Likes } from '../../images/likes.svg';

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
                <Home className='icon'/>
                <Messages className='icon'/>
                <Add className='icon'/>
                <Search className='icon'/>
                <Likes className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header