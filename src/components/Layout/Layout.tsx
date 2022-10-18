import React from 'react'
import Header from '../Header/Header'
import s from "./Layout.module.scss"

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={s.layout}>
        <Header/>
        <div className={s.main}>
            {children}
        </div>
    </div>
  )
}

export default Layout
