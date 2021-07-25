import React, {useEffect} from "react";
import './info.css'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Info = () => {
    useEffect(() => {
        Aos.init({duration: 50 })
    }, [],)
    return (

        <buttom className="mainArticleInfo">

            <div className='arInfo'>
                <span>Skype - tall78</span>
                <span>Phone +7(964)339-25-29</span>
            </div>
        </buttom>

    )
}

export default Info;