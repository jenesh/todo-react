import React from 'react'

const Todos = ({ todos, deleteBtn }) => {
    // Gets Todos Array and display each of them
    console.log('Todos => ', todos)

    const style = {
        margin: '5px'
    }

    const todo = todos.map(todo => {
        return (
            <div key={todo.id} style={style} className='grey lighten-2 card center row valign-wrapper hoverable'>
                <p className='col s10'>{todo.body}</p>
                <button 
                    className='btn-floating right'
                    onClick={() => deleteBtn(todo.id)}
                >
                <i className='material-icons'>delete</i>
                </button>
            </div>
        )
    })

    

    return (
        <div style={style}>
            {todo}
        </div>
    )
}

export default Todos;