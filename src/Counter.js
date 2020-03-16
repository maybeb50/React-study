import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const increase = () => {
        // setNumber(number + 1);
        dispatch({
            type: 'INCREMENT'
        });
    }

    const decrease = () => {
        // setNumber(number - 1);
        dispatch({
            type: 'DECREMENT'
        });
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