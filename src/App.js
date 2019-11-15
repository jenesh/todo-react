import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

export default class App extends Component {
    // Current State
    state = {
        todos: []
    }
    // Add todo and update state
    addTodo = (todo) => {
        console.log(todo)
        todo.id = this.state.todos.length + 1;
        // const todos = [...this.state.todos, todo];
        const todos = [...this.state.todos];
        todos.push(todo)
        this.setState({todos})
        console.log(todos)
    }
    // Delete selected todo
    deleteBtn = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({todos})
    }
    // 

    render() {
        return (
            <div className='container'>
                <Todos todos={this.state.todos} deleteBtn={this.deleteBtn}/>
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}
