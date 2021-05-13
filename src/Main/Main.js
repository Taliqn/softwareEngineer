import React, { useEffect } from "react";
import image from '../img/fullsack.jpg'
import './Main.css'
import {NavLink} from "react-router-dom";
import Aos from 'aos'

const Main = () => {
    useEffect (() => {
        Aos.init({ duration: 100 })
    }, [])
    return (
        <bottom data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="100"
                data-aos-duration="400" className='Main'>
            <div className='text2' >

            <div className='block'>
                <div className='info'>
                    <h3>
                        Специализация в разработке
                        SPA APP приложений.</h3><br/>
                    <li> Создаём проекты эффективные для бизнеса и полезные для клиента.
                        Решаем задачи любой сложности.</li><br/>
                        <li> Соблюдаем договоренности по срокам, бюджету и качеству кода.</li>
                            <br/><h3>Мобильные APP
                            </h3>
                            <li>Проектируем уникальные приложения для крупного и среднего бизнеса,
                                интегрированные с вашими IT-системами. iOS/Android/Кроссплатформа</li><br/>
                                <h3>Веб-приложения
                                </h3>
                            <li>Создаем Web-приложения и сайты с широким функционалом и сложными интеграциями.</li>
                </div>
            </div>


               </div>
        </bottom>
    )
}
export default Main;