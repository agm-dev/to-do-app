import React, { Component } from 'react'

const defaultState = {
  todos: [
    { id: 1, title: 'todo 1', done: false },
    { id: 2, title: 'todo 2', description: 'this is a sample description', done: false },
    { id: 3, title: 'todo 3', done: false },
    { id: 4, title: 'todo 4', done: true },
    { id: 5, title: 'todo 5', done: false },
    { id: 6, title: 'todo 6', done: false },
    { id: 7, title: 'todo 7', description: 'this is a sample description', done: false },
    { id: 8, title: 'todo 8', done: false },
    { id: 9, title: 'todo 9', done: true },
    { id: 10, title: 'todo 10', done: false },
  ],
}

const TodosContext = React.createContext(defaultState)

class TodosProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { ...defaultState }
  }

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      this.setState({ todos: storedTodos })
    }
  }

  componentDidUpdate(prevState) {
    const { todos } = this.state
    const prevDataString = JSON.stringify(prevState.todos)
    const DataString = JSON.stringify(todos)
    if (prevDataString !== DataString) {
      localStorage.setItem('todos', DataString)
    }
  }

  addTodo = todo => {
    const { title, description } = todo
    const { todos } = this.state
    const newTodo = {
      id: (new Date()).getTime(),
      title,
      description,
      done: false,
    }
    this.setState({ todos: [...todos, newTodo]})
  }

  render() {
    const { children } = this.props
    const { todos } = this.state

    return (
      <TodosContext.Provider
        value={{
          todos,
          addTodo: this.addTodo,
        }}
      >
        {children}
      </TodosContext.Provider>
    )
  }
}

export {
  TodosContext,
  TodosProvider,
}
