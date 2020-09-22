import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <div className="pageHeader">
            <bottom className='bottomH' ><NavLink to='/' className='aHeader'> <small>IT Consulting</small></NavLink>
                </bottom>
            </div>
    )
}

export default Header;