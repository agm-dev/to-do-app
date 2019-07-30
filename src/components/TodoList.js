import React from 'react'
import { List } from '@material-ui/core'
import TodoListItem from './TodoListItem'

export default ({ todos }) => {
  return (
    <>
    <List>
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </List>
    <div className="breakline" />
    </>
  )
}
