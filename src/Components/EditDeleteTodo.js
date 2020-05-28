import React, {useState} from 'react';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import firebase from "firebase"

function EditDeleteTodo() {
    const database = firebase.database().ref();
    const [newTodo, addTodo] = useState("")
    const [redirectToHome, gotoHome] = useState(false)
    function updateDB() {
        const value = database.push() 
        value.set({
            completed: false,
            id: value.key,
            text: newTodo,   
        })
        gotoHome(true)
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
            {redirectToHome === true ? <Redirect to="/" /> : null}
        </div>
    )
}

export default EditDeleteTodo