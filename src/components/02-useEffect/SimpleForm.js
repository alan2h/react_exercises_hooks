import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect(() => {
     console.log('hey')   
    },[email])

    const handleInputChange = (e) => {
        setformState({
            ...formState,
            [e.target.name]: [e.target.value] 
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            { (email != '') ? <Message /> : null}
            
        </>
    )
}
