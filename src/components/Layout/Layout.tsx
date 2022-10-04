import React from 'react'
import Header from '../Header/Header'
import "./Layout.scss"

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className='layout'>
        <Header/>
        <main>
            <div>
                {children}
            </div>
        </main>
    </div>
  )
}

export default Layout