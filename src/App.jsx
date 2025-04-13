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


import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
