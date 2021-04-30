import React, {useEffect} from "react";
import './Article.css'
import {NavLink} from "react-router-dom";
import Prising from "../Aos/Aos2";
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { ScrollTo, ScrollArea } from "react-scroll-to";


const Article = () => {
    useEffect(() => {
        Aos.init({})
    }, [],)
    return (

        <div className="mainArticle"
             data-aos="flip-right"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="2000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center">
            <div className='ar'>
                <div className='boxes'><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Prising' className='a'>
                    <span>Engineering</span></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div className='boxes'><NavLink to='/Main' className='a'>
                    <small>back</small></NavLink>
                </div>
                <div className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div  className='boxes'><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div  className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div  className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div  className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>
                <div  className='boxes' ><NavLink to='/Prising' className='a'>
                    <span>Developing</span></NavLink>
                </div>



            </div>
        </div>

    )
}

export default Article;