import React from 'react';
import './Navbar.scss';
import { NavLink, Outlet } from 'react-router-dom';

const navbar = () => {
    return (
      <>
      <header>
      <NavLink to='/'>Главная страница</NavLink>
      <NavLink to='/posts'>Блоги</NavLink>
      <NavLink to='/login'>Войти</NavLink>
      <NavLink to='/register'>Регистрация</NavLink>
      <NavLink to='/about'>О сайте</NavLink>
      </header>
      <Outlet/>
      </>
    );
}

export default navbar;
