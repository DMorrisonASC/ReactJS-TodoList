import React, {useState} from 'react';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import firebase from "firebase"

function CreateTodo() {
    // 1. Get the firebase object needed to get access to their database. Then...
    const database = firebase.database().ref();
    const [newTodo, addTodo] = useState("")
    const [redirectToHome, gotoHome] = useState(false)
    // 5. It runs when the form is submitted. Any value(number, text, etc) in the the input box is sent to the DB, creating a new todo.
    function updateDB() {
        // push to the `value` into the DB.
        const value = database.push() 
        value.set({
            // False because most people wouldn't add a goal they already completed
            completed: false,
            // This is important for checkboxes becauses it gives them an indiviual id. Without this, 
            // ...the program doesn't know which checkbox to check/toggle.
            id: value.key,
            // `newTodo` is whatever the user text user put into the input box. Ex. If user put "Go to school", it is stored in...
            // `newTodo` then pushed to the DB to create a new Todo.
            text: newTodo,   
        })
        gotoHome(true)
    }
    // 3. `handleChange` runs if an event is triggered. Then...
    function handleChange(event) {
        // ...it gets the value of the input box and stores it into `newTodo` using `addTodo`
        addTodo(event.target.value)
    }
    return(
        <div>
            <h2>What's your goal?</h2>
            {/* 4. When user submits form(using the "Add Todo!" button) `updateDB()` is run */}
            <form onSubmit={updateDB}>
                {/* 2. When user types anything into the input box run `handleChange()` using `onChange` */}
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
            {/* When user clicks the "cancel" or "Add Todo!" buttton, they are redirected to the home page */}
            {redirectToHome === true ? <Redirect to="/" /> : null}
        </div>
    )
}

export default CreateTodo;