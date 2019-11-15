import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {}
    
    // Submit state to App
    changeState = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    // Update temp state to be added later
    updateTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target[0].value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateTodo} className='center'>
                    <input 
                        type="text" 
                        id="body" 
                        onChange={this.changeState} 
                        className='grey white-text center' 
                        autoFocus={true}
                        placeholder='Write a new todo...'
                        required={true}
                    />
                    <button className='btn green'>Add Todo</button>
                </form>
            </div>
        )
    }
}
