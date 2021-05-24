import React, {  useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {

    const [values , handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = values;

    return (
        <>
            <h1>Frm with custom hook</h1>
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
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            
        </>
    )
}
