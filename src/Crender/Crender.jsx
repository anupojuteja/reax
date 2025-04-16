

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
// import React from 'react'
// import './Crender.css'

// function Crender() {
//     let isLoggedIn = true;
//     let register;
//     if (isLoggedIn) {
//         register = <div className='box'>Logged in</div>;
//         }
//         else{
//             register = <div className='box'>Not registered</div>
//         }
//         return register;
//         }

        


// export default Crender;


// terinary rendering :
// import React from 'react'
// import './Crender.css'
// function Crender() {
//     let isLoggedIn = true;
//     return (
//         <div className='box'>
//             {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}
//             </div>
//             );
// }
// export default Crender;



// switch case :
// import React from 'react'
// import './Crender.css'
// function Crender() {
//     let isLoggedIn = false;
//     let register;
//     switch (isLoggedIn) {
//         case true:
//             register = <div className='box'>Logged in</div>;
//             break;
//             case false:
//                 register = <div className='box'>Not registered</div>;
//                 break;
//                 default:
//                     register = <div className='box'>Please login</div>;
//                     break;
//                     }
//                     return register;
//                     }
//                     export default Crender;
                    // switch case is used when we have multiple cases to check and we want to perform different actions for
                    // each case. It is used when we have a lot of cases to check and we want
                    // to make our code more readable and easier to understand.
                    // It is also used when we want to perform different actions for each case.
                    // The switch statement is used to execute different blocks of code based on the value of a variabl



// short circuit rendering : 

import React from "react";
import "./Crender.css";
function Crender() {
    let isLoggedIn = true;
    return (
        <div className='box'>
            {isLoggedIn && <h1>Welcome</h1>}
            {isLoggedIn || <h1>Please login</h1>}
            </div>
            );
            }
            export default Crender;
