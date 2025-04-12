import React from 'react'

import "./App.css"

import Hero from './components/hero/Hero'
import Testimonial from './components/Testimonial/Testimonial'

export default function App() {
  return (
    <div className='mainCon'>
        <Hero />
        <Testimonial />        
    </div>
  )
}


