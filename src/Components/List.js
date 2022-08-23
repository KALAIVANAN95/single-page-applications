import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

import "../Css/ListStyle.css";

const List = () => {
  return (
    <>
    <header>
    <div className='container container-flex'>
        <div className='logoContainer'>
        <img src={logo} alt='logo' className='logo' />
        </div>

        <nav>
            <div className='list'>
                <NavLink to='/' className='listItem' activeClassName='active'>Home</NavLink>
                <NavLink to='/about' className='listItem' activeClassName='active'>About</NavLink>
                <NavLink to='/services' className='listItem' activeClassName='active'>Services</NavLink>
                <NavLink to='/contact' className='listItem' activeClassName='active'>Contact</NavLink>
                <NavLink to='/policy' className='listItem' activeClassName='active'>Policy</NavLink>

            </div>

        </nav>
        <div className='icons'>
        <i class="fa-solid fa-magnifying-glass icon"></i>
        <i class="fa-solid fa-user icon"></i>
        <i class="fa-solid fa-phone icon"></i>
        </div>
        
    </div>
    </header>
    </>
  )
}

export default List
