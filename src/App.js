import React from 'react';
import './App.css';
import YoutubeBackground from 'react-youtube-background'
import Header from "./Header/header";
import Footer from "./Footer/Footer";
import Article from "./Article/Article";
import {BrowserRouter, Route } from "react-router-dom";
import Prising from './Aos/Aos2'
import Main from "./Main/Main";



const App = () => {
  return (
     <BrowserRouter>
        <YoutubeBackground  loop autoPlay
            // videoId ='B_la8N_AYkA' >
                           videoId ='null'>
          {/* // videoId ='R9mXtzn8meE' >*/}
          {/* // videoId ='x3to_8SqZ9s' >*/}
          {/*// videoId ='Gb60nPzgS8o' >*/}
          {/*// videoId ='gTv6s0r_GKI' >*/}
          {/*//  videoId ='dgAldVi00OM' >*/}

        <div className='Content2' >

          <Header/>
         <Route path='/Menu' component={Article}/>
          <Route path='/Prising' component={Prising}/>
          <Route path='/Main' component={Main}/>

          <Footer />
      </div>

        </YoutubeBackground >
       </BrowserRouter>
  )

}
export default App;

