//short circuit 

// import React from "react";

// const Crender = () => {
//     let isLoggedIn = true;
//     if (isLoggedIn) {
//         return <div>Logged in</div>;
//         }
//         else {
//             return <div>Not logged in</div>;
//             }
//             };
//             export default Crender;
//     return (
//         <div>
//             {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}
//         </div>
//          );
//             };
// export default Crender;


// element variable 
import React from 'react'
import './Crender.css'

function Crender() {
    let isLoggedIn = true;
    let register;
    if (isLoggedIn) {
        register = <div className='box'>Logged in</div>;
        }
        else{
            register = <div className='box'>Not registered</div>
        }
        return register;
        }

        


export default Crender;
