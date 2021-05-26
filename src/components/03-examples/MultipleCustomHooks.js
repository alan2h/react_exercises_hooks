import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {

    

    const {increment, decrement, counter} = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {loading, data} = useFetch(url);

    

    return (
        <div>
            <h1>Breaking bad</h1>
            <hr />

            {
                loading?
                (
                    <div className="alert alert-info text-center" >
                        loading ...
                    </div>
    
                ):(
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> { data[0].quote } </p>
                        <footer className="blockquote-footer">{ data[0].author }</footer>
                    </blockquote>
                )

            }

           <button onClick={increment} className="btn btn-primary">
                siguiente frase
           </button>
          

        </div>
    )
}
