import React, {useEffect} from "react";
import './Article.css'
import {NavLink} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Article = () => {
    useEffect(() => {
        Aos.init({duration: 100 })
    }, [],)
    return (

        <buttom className="mainArticle"
             data-aos="flip-right"
             data-aos-offset="0"
             data-aos-delay="50"
             data-aos-duration="300"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center">
            <div className='ar'>
                <div className='boxes'><NavLink to='/Technology' className='a'>
                    <span>Technology</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Project' className='a'>
                    <span>Project</span></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Info' className='a'>
                    <span>Info</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Main' className='a'>
                    <span>Main</span></NavLink>
                </div>

            </div>
        </buttom>

    )
}

export default Article;