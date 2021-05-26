import React, { useEffect, useReducer, useState } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [] , init)

    const [Input, setInput] = useState('')

    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('nueva tarea')

        const newTodo = {
            id: new Date().getTime(),
            desc: Input,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)

    }
    


    const handleRemove = (todoId) => {
        const action = {
            type: 'remove',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const getClassComplete = (done)=> {
        console.log(done)
        return done ? "complete": " "
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length} ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                <ul>
                    {
                        todos.map( (todo, indice) => {
                            return(
                                <li key={todo.id} >
                                    <p onClick={ () => handleToggle(todo.id)} className={"text-center " + getClassComplete(todo.done) }>{indice + 1} {todo.desc}</p>
                                    <button onClick={() => handleRemove( todo.id )} className="btn btn-danger">Borrar</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>

                <div className="col-5" >
                    

                    <h4>Agregar ToDO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="decription"
                            placeholder="Aprender ..."
                            className="form-control"
                            autoComplete="off"
                            value={ Input }
                            onChange={ handleChange }
                        />


                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Agregar
                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}
