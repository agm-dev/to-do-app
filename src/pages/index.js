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

  return (
    <Layout>
      <SEO title="Home" />
      {
        todos.length ?
        <TodoList todos={todos} /> :
        <Typography>You are done!</Typography>
      }
      <AddTodoButton to="/add" />
    </Layout>
  )
}

export default IndexPage
