import React from 'react';
import ForgotPsw from './ForgotPsw';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import './Login.scss';

function Login() {
    return (
    <div className='login'>
        <h1>Вход</h1>
        <form className='regForm'>
        <div for='email'>
        <input type='email' placeholder='Email' className='input'/>
        </div>
        <div for='password'>
        <input type='password' placeholder='Пароль' className='input' />
        </div>
        <button className='button'>Войти</button>
        <div className='forgetLogin'>
        <a href="/pswforgot" class="footer-links__link">Забыли пароль? </a></div>  
        </form> 
    </div>  
    )
}


export default Login;