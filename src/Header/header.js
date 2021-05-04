import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <div className="pageHeader">
            <nav className='menu'>
                    <ul className='menu__list'>
                        <h1 className='info'>SOFTWARE</h1>
                        <li>
                            <NavLink className = 'menu__link' to='/'> <small>Consulting</small></NavLink>
                            <ul className='sub-menu__list'>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className = 'menu__link' to='/'> <small>Consulting</small></NavLink>
                            <ul className='sub-menu__list'>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                            </ul>
                            </li>
                        <li>
                            <NavLink className = 'menu__link' to='/'> <small>Consulting</small></NavLink>
                            <ul className='sub-menu__list'>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                                <li>
                                    <NavLink className = 'sub-menu__link' to='/' > <small>Consulting 2</small></NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>
    )
}

export default Header;