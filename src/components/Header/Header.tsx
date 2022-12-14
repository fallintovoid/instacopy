import React, { useCallback } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { RiProfileFill, RiProfileLine } from "react-icons/ri";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Input from "../Input/Input";

import s from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const handleChange = useCallback(() => {
    // можно делать штуки тут
  }, []);

  return (
    <header className={s.header}>
      <div className={s.header_inner}>
        <Link className={s.logo} to="/">
          <Logo />
        </Link>
        <div className={s.searchbar}>
          {/*TODO: сделать инпут компонентом*/}
          <Input onChange={handleChange} placeholder="Search" />
        </div>
        <menu className={s.menu}>
          <ul className={s.list}>
            <li>
              <Link className={s.link} to="/">
                {pathname === "/" ? <AiFillHome className={s.icon} /> : <AiOutlineHome className={s.icon} />}
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/profile">
                {pathname === "/profile" ? <RiProfileFill className={s.icon} /> : <RiProfileLine className={s.icon} />}
              </Link>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
};

export default Header;
