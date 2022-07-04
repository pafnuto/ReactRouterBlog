import React from 'react';
import './Login.scss';

function ForgotPsw() {
    return (
    <div className='login'>
        <h1>Забыли пароль? Не страшно.</h1>
        <form className='pswForm'>
        <div for='email'>
        <input type='email' placeholder='Email' className='input'/>
        </div>
        <div for='password'>
        <input type='password' placeholder='Новый пароль' className='input' />
        </div>
        <div for='password'>
        <input type='password' placeholder='Повторите новый пароль' className='input' />
        </div>
        <button className='button'>Сменить пароль</button>
        <div className='forgetLogin'>
        <a href="/Register" class="footer-links__link">Забыли пароль? </a></div>  
        </form> 
    </div>  
    )
}


export default ForgotPsw;