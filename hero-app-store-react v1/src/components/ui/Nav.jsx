import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../../assets/logo.png';
import './Nav.css';
import github from '../../assets/github.png';


const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/allApps">Apps</NavLink>
                        <NavLink to="/installedApps">Installation</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-8 h-8" />
                    <span>HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10 text-xl font-bold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/allApps">Apps</NavLink>
                    <NavLink to="/installedApps">Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/AhmadZubayer" className="text-lg btn bg-gradient-to-r from-[#642fe4] to-[#995df1] text-white border-none hover:from-[#5526cc] hover:to-[#8449d9] flex items-center gap-2">
                    <img src={github} alt="GitHub" className="w-5 h-5" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Nav;