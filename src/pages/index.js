import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from '../components/TodoList'
import AddTodoButton from '../components/AddTodoButton'
import { TodosContext } from '../context/TodosContext'
import { Typography } from '@material-ui/core'

const IndexPage = () => {
  const context = useContext(TodosContext)
  const { todos } = context
  const pending = todos.filter(todo => !todo.done)

  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="subtitle1">
        Pending tasks ({pending.length})
      </Typography>
      {
        pending.length ?
        <TodoList todos={pending} /> :
        <Typography>You are done!</Typography>
      }
      <AddTodoButton to="/add" />
    </Layout>
  )
}

export default IndexPage
