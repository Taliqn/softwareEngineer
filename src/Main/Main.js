import React, { useEffect } from "react";
import './Main.css'
import {NavLink} from "react-router-dom";
import Aos from 'aos'

const Main = () => {
    useEffect (() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <bottom data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000" className='Main'>
        <NavLink to='/Main' className='text3'> </NavLink>
            <span className='text3'>Hello</span>
        </bottom>
    )
}
export default Main;