import React from "react";

const Crender = () => {
    let isLoggedIn = true;
    return (
        <div>
            {isLoggedIn ? <h1>Welcome</h1> : <h1>Please login</h1>}
        </div>
         );
            };
export default Crender;