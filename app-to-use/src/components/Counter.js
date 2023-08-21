//import { useState } from 'react';
import React from "react";

function Counter({ increment, decrement}) {
   
    return ( <>
        
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
    </> );
}

export default Counter;