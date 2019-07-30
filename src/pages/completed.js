import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from '../components/TodoList'
import AddTodoButton from '../components/AddTodoButton'
import { TodosContext } from '../context/TodosContext'
import { Typography } from '@material-ui/core'

export default () => {
  const context = useContext(TodosContext)
  const { todos } = context
  const completed = todos.filter(todo => todo.done)

  return (
    <Layout>
      <SEO title="Completed" />
      <Typography variant="subtitle1">
        Completed tasks ({completed.length})
      </Typography>
      {
        completed.length ?
        <TodoList todos={completed} /> :
        <Typography>You have still not completed any 'todos'.</Typography>
      }
      <AddTodoButton to="/add" />
    </Layout>
  )
}
