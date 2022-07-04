import './App.scss';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPsw from './pages/ForgotPsw';
import React, { useState, useParams} from 'react';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route>
    <Route index element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/pswforgot' element={<ForgotPsw/>}/>
    <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
