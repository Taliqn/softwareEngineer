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
                        <Media query="(max-width: 768px)" render={() =>
                            (
                    <div className="botom">
                        <NavLink className='boxes' to='/Menu'><span
                        >=</span></NavLink>
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
                                <a  className="header__link">Главная</a>
                            </li>
                            <li>
                                <a  className="header__link">Проекты</a>
                            </li>
                            <li>
                                <a  className="header__link">Технологии</a>
                            </li>
                            <li>
                                <a  className="header__link">Клиенты</a>
                            </li>
                            <li>
                                <a  className="header__link">Контакты</a>
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