import React from 'react'
import '../pages/Landing.css'
import About from './About/About'
import Home from './Home/Home'

export default function Landing() {
  return (
    <div className='container'>
     <Home/>
     <About/>
    </div>
  )
}
