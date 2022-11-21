import React, { useState,useRef } from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Routes,Route} from "react-route-dom"
import Home from './StyleComponentPro/Home.jsx'
import Contact from './StyleComponentPro/Contact.jsx'
import About from './StyleComponentPro/About.jsx'
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
  )
}