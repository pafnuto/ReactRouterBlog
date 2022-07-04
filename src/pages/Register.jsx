import React from "react";
import './Register.scss';

function Register() {
    return (
    <div className='register'>
        <h1>Добро пожаловать!</h1>
        <h2>На этой странице вы можете зарегистрироваться</h2>
        <form className='regForm'>
        <div for='name'>
        <input type='text' placeholder='Логин' className='input'/>
        </div>
        <div for='email'>
        <input type='email' placeholder='Email' className='input'/>
        </div>
        <div for='password'>
        <input type='password' placeholder='Пароль' className='input' />
        </div>
        <button className='button'>Регистрация</button>
        </form> 
        </div>  
    )
}

export default Register;