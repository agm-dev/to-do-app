import React, { Component } from 'react'

const defaultState = {
  todos: [],
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

  toggleTodo = id => {
    const { todos } = this.state
    const match = todos.find(todo => todo.id === id)
    if (match) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
      this.setState({ todos: updatedTodos })
    }
  }

  render() {
    const { children } = this.props
    const { todos } = this.state

    return (
      <TodosContext.Provider
        value={{
          todos,
          addTodo: this.addTodo,
          toggleTodo: this.toggleTodo,
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
