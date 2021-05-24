import React, {useState} from 'react'

import './counter.css'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20
    })

    const {counter1, counter2} = state;

    const handleIncrement = () => {
        //setCounter(Counter + 1)
        setCounter({...state, counter1: counter1 + 1})
    }

    

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2} </h1>
            <hr />
            <button onClick={handleIncrement} className="btn btn-primary">+1</button>
        </>
    )
}
