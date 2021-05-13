import React from 'react';
import './App.css';
import Header from "./Header/header";
import Article from "./Article/Article";
import {BrowserRouter, Route } from "react-router-dom";
import Prising from './Aos/Aos2'
import Main from "./Main/Main";
import Footer from "./Footer/Footer";




const App = () => {
  return (
     <BrowserRouter>
         <canvas id="sakura"></canvas>
         <div className="btnbg">
        <div className='Content2' >

          <Header/>
         <Route path='/Menu' component={Article}/>
          <Route path='/Prising' component={Prising}/>
          <Route path='/Main' component={Main}/>

          {/*<Footer />*/}
      </div>
         </div>

       </BrowserRouter>
  )

}
export default App;

