import React, {useState, useEffect} from "react"
import firebase from "./Components/firebase"
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import Footer from "./Components/Footer"

function App() {  
    const [allTodos, setTodos] = useState([])  
    useEffect(() => {
        const database = firebase.database().ref();
        database.on("value", logData)  
    }, []) 

    function logData(rowData) {    
        setTodos(rowData.val())
    } 
    function handleChange(id) {
            const updatedTodos = allTodos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        setTodos(updatedTodos)  
        // Other possible solution 
        // setTodos(prevTodos => {
        //     const updatedTodos = prevTodos.map(todo => {
        //         if (todo.id === id) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo
        //     })
        //     return updatedTodos // <-- return the todos, not an object
        // })              
    }
    const todoComponents = allTodos.map(item => <Todos key={item.id} item={item} handleChange={handleChange}/>)
    return (
        <div>
            <Header />
            <div className="todo-list">
                <button></button>
            {todoComponents}
            </div>
            <Footer />
        </div>
    )
}

export default App