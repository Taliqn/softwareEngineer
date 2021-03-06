import React from 'react';
import './App.css';
import Header from "./Header/header";
import Article from "./Article/Article";
import {BrowserRouter, Route, Redirect } from "react-router-dom";
import Prising from './Aos/Aos2'
import Main from "./Main/Main";
import Project from "./Project/Project";
import Technology from "./Tecnology/Tecnology";
import info from "./Login/Info/info";




const App = () => {
  return (
     <BrowserRouter>
         <canvas id="sakura"></canvas>
         <div className="btnbg">
        <div className='Content2' >

          <Header/>
         <Redirect to='/Menu' />
          <Route path='/Prising' component={Prising}/>
          <Route path='/Main' component={Main}/>
          <Route path='/Project' component={Project}/>
          <Route path='/Technology' component={Technology}/>
          <Route path='/Menu' component={Article}/>
          <Route path='/info' component={info}/>


      </div>
         </div>

       </BrowserRouter>
  )

}
export default App;

