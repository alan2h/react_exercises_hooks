import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css'

export const LayoutEffect = () => {

    

    const {increment, decrement, counter} = useCounter(2);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {loading, data} = useFetch(url);

    const { quote } = !!data && data[0]

    const ptag = useRef()

    useLayoutEffect( () => {
        console.log('hey')
        console.log(ptag.current.getBoundingClientRect())
    }, [ptag])

    console.log(data)

    return (
        <div>
            <h1>Breaking bad</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                className="mb-0"
                ref={ptag}
                > 
                { quote } </p>
            </blockquote>

           <button onClick={increment} className="btn btn-primary">
                siguiente frase
           </button>
          

        </div>
    )
}
