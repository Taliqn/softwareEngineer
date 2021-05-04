import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";


const Footer = () => {
    return(
        <div className="pageFooter">
            <bottom className='bottomF'><NavLink to='/Menu' className='aFooter'> <small>SOFTWARE </small></NavLink>
            </bottom>
        </div>
    )
}

export default Footer;