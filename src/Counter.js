import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
    }

    const decrease = () => {
        setNumber(number - 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button type="button" onClick={increase}>+</button>  
            <button type="button" onClick={decrease}>-</button>  
        </>
    );
}

export default Counter;