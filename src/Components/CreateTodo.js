import React, {useState} from 'react';
import { Link } from "react-router-dom";

import firebase from "firebase"

function CreateTodo() {
    const database = firebase.database().ref();
    const [newTodo, addTodo] = useState("")
    function updateDB() {
        // const value = database.push(
        //     {
        //     completed: false,
        //     id: 1,
        //     text: newTodo,
        //     })  
        const value = database.push() 
        value.set({
            completed: false,
            id: value.key,
            text: newTodo,   
        })
        console.log(value);    
    }

    function handleChange(event) {
        addTodo(event.target.value)
    }
    return(
        <div>
            <h2>What's your goal?</h2>
            <form onSubmit={updateDB}>
                <input 
                type="text"
                name="goal"
                placeholder="Write todo here..."
                onChange={handleChange}>
                </input>
                <button>Add Todo!</button>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default CreateTodo;