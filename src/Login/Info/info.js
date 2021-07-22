import React, {useEffect} from "react";
import './info.css'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Info = () => {
    useEffect(() => {
        Aos.init({duration: 100 })
    }, [],)
    return (

        <buttom className="mainArticleInfo"
                data-aos="flip-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
            <div className='ar'>

                <div className='boxesInfo'>
                    <span>Skype - tall78</span>
                </div>
                <div className='boxesInfo'>
                    <span>Phone +7(964)339-25-29</span>
                </div>


            </div>
        </buttom>

    )
}

export default Info;