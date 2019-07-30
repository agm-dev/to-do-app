import React, { useContext } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from '../components/TodoList'
import AddTodoButton from '../components/AddTodoButton'
import { TodosContext } from '../context/TodosContext'

const IndexPage = () => {
  const context = useContext(TodosContext)
  const { todos } = context

  return (
    <Layout>
      <SEO title="Home" />
      <TodoList todos={todos} />
      <AddTodoButton to="/page-2" />
    </Layout>
  )
}

export default IndexPage
