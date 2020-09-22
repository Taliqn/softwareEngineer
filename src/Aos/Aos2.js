import React, { useEffect } from "react";
import './Aos2.css'
import Aos from 'aos'


const Prising = () => {
useEffect (() => {
Aos.init({ duration: 2000 })
}, [])
return (
<div className='Pris'>


<div data-aos="flip-left" data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000" ><div className='text2' >
     <h1 className='h1'></h1><h3 className='h3'><li> Develop system and software for businesses.
     These products range from business applications and network control
     systems and operating systems.<li> A software engineer's responsibilities may also
     include: Working with users to determine their software needs.</li></li></h3></div>

     <div className='pic'>
     <img className='pic2' src='https://qwizz.ru/wp-content/uploads/2018/05/it-tekhnologii.jpg'  />
     </div>
</div>

</div>

)
}
export default Prising;
