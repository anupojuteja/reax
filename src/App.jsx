// import React from 'react'

// import "./App.css"

// import Hero from './components/hero/Hero'
// import Testimonial from './components/Testimonial/Testimonial'

// export default function App() {
//   return (
//     <div className='mainCon'>
//         <Hero />
//         <Testimonial />  
       

//     </div>
//   )
// }


// import { GregorioTodoList, HedyTodoList } from './components/document/Blog.jsx'

// function Profile() {
//   return (
//     <>
    
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//      < HedyTodoList/>
//      < GregorioTodoList />
//     </>

//   );
// }

// export {Profile}



// src/App.jsx
import React from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import Testimonial from './components/Testimonial/Testimonial';
import { Profile } from './components/document/profile';

export default function App() {
  return (
    <div className='mainCon'>
      <Hero />
      <Testimonial />
      <Profile />
    </div>
  );
}
