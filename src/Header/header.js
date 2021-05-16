import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";
import Media from 'react-media';

const Header = () => {
    return (
        <div className="pageHeader">
            <header className="header">
                <div className="header__body">
                        <h1 className='info'>FULL STACK DEVELOPMENT</h1>
                    <div>
                        <Media query="(max-width: 767px)" render={() =>
                            (
                    <div>
                        <NavLink  to='/Menu'>
                            <img src={require("../img/mobile.png")} alt="альтернативный текст" className='botom'/>
                        </NavLink>

                    </div>
                            )}
                        />
                    </div>
                    <nav className="header-menu">
                        <div>
                            <Media query="(min-width: 768px)" render={() =>
                                (
                        <ul className="header__list">
                            <li>
                                <NavLink to='/Main'  className="header__link">Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Project'  className="header__link">Проектирование</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Technology'  className="header__link">Технологии</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Menu'  className="header__link">Контакты</NavLink>
                            </li>

                        </ul>
                                )}
                            />
                        </div>
                    </nav>
                </div>

            </header>
            </div>
    )
}

export default Header;