import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from '../components/TodoList'
import AddTodoButton from '../components/AddTodoButton'

const todos = [
  { title: 'todo 1', done: false },
  { title: 'todo 2', description: 'this is a sample description', done: false },
  { title: 'todo 3', done: false },
  { title: 'todo 4', done: true },
  { title: 'todo 5', done: false },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TodoList todos={todos} />
    <AddTodoButton to="/page-2" />
  </Layout>
)

export default IndexPage
