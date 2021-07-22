import React, { useEffect } from "react";
import './Technology.css'
import Aos from 'aos'

const Technology = () => {
    useEffect (() => {
        Aos.init({ duration: 0 })
    }, [])

    return (
        <bottom
            // data-aos="flip-right"
            //       data-aos-offset="0"
            //       data-aos-delay="0"
            //       data-aos-duration="300"
            //       data-aos-easing="ease-in-out"
            //       data-aos-mirror="true"
            //       data-aos-once="false"
            //       data-aos-anchor-placement="top-center"
                  className='Technology'>


                <div className='block3'>
                    <div className='infoProject'>
                        <h3>Applied technologies</h3><br/>
                        <p>The specialization of the applied technologies is based on two modern programming languages:</p>
                                <br/>
                            <li> React.js - frontend </li>
                            <li>Node.js - backend</li>
                                <br/>
                        <div> The Node.js platform is one of the most popular platforms for building efficient and scalable REST API's these days. It is also suitable for building hybrid mobile applications, desktop programs, and even for the IoT.</div><br/>
                        1. Time&Material
                        <li> The project is divided into tasks, each of which the team assesses separately, so that you have the opportunity to make any additions in the course of work. When the task is completed and you are provided with a visible result, you pay for the team's work (payment can occur immediately after the sprint, monthly, quarterly, etc. - as you like). This model is ideal for MVP implementation or projects that can change depending on the specifics of the market. The project is released and tested at the end of each stage.</li>
                        <br/>
                        <h4>Flexibility of implementation</h4>

                        <li>
                            You can make changes to the terms of reference during the implementation of the project</li>
                        <h4>Start urgency</h4>
                        <li>You can start without drawing up a complex technical task and a complete project</li>
                        <h4>Convenience of interaction</h4>
                        <li>The customer and the project manager are deeply involved in the implementation process</li>
                        <h4>Cost optimization</h4>
                        <li>The cost of the project changes both up and down as changes are made to the implementation plan</li>
                        <h4>Transparency of work</h4>
                        <li>Payment is made after the fact for specific work performed</li>
                        <br/>
                        2. Fixed Price
                        <li>The model assumes that the budget for the development of the entire project and its Terms of Reference are approved before the start of work and remains unchanged. Also, before starting work, the exact calendar deadline for the delivery of the project is approved, which is based on the Terms of Reference. Thus, you know exactly the cost and timing of the project, but you will not be able to make changes during development. The release and testing of the project occurs at the end of all work.</li>
                    </div>
                </div>



        </bottom>
    )
}

export default Technology;