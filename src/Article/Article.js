import React, {useEffect} from "react";
import './Article.css'
import {NavLink} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Article = () => {
    useEffect(() => {
        Aos.init({})
    }, [],)
    return (

        <div className="mainArticle"
             data-aos="flip-right"
             data-aos-offset="10"
             data-aos-delay="50"
             data-aos-duration="300"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center">
            <div className='ar'>
                <div className='boxes'><NavLink to='/Prising' className='a'>
                    <span>Технологии</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Prising' className='a'>
                    <span>Проекты</span></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Клиенты</span></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Контакты</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Main' className='a'>
                    <small>Главная</small></NavLink>
                </div>

            </div>
        </div>

    )
}

export default Article;