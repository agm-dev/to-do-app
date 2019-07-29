import React from 'react'
import { List } from '@material-ui/core'
import TodoListItem from './TodoListItem'

export default ({ todos }) => {
  return (
    <>
    <List>
      {todos.map(todo => (
        <TodoListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
        >
        </TodoListItem>
      ))}
    </List>
    <div className="breakline" />
    </>
  )
}
