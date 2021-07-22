import React, { useEffect } from "react";
import './Main.css'
import Aos from 'aos'

const Main = () => {
    useEffect (() => {
        Aos.init({ duration: 100 })
    }, [])
    return (
        <bottom   data-aos="flip-right"
                  data-aos-offset="0"
                  data-aos-delay="50"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center" className='Main'>

            <div className='block'>
                <div className='infoMains'>
                    <h3>
                        Development specialization
                        SPA APP applications.</h3><br/>
                    <li> We create projects that are effective for business and useful for the client.
                        We solve problems of any complexity.</li><br/>
                        <li> We adhere to agreements on deadlines, budget and code quality.</li>
                            <br/><h3>Mobile APP
                            </h3>
                            <li>We design unique applications for large and medium-sized businesses,
                                integrated with your IT systems. iOS / Android / Cross-platform</li><br/>
                                <h3>Web applications
                                </h3>
                            <li>We create Web applications and sites with broad functionality and complex integrations.</li>
                </div>
            </div>



        </bottom>
    )
}
export default Main;