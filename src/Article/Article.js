import React, {useEffect} from "react";
import './Article.css'
import {NavLink} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Article = () => {
    useEffect(() => {
        Aos.init({duration: 50 })
    }, [],)
    return (

        <buttom className="mainArticle" >

            <div className='ar'>
                <div className='boxes'><NavLink to='/Technology' className='aInfo'>
                    <span>Technology</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Project' className='aInfo'>
                    <span>Project</span></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Info' className='aInfo'>
                    <span>Info</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Main' className='aInfo'>
                    <span>Main</span></NavLink>
                </div>

            </div>
        </buttom>

    )
}

export default Article;