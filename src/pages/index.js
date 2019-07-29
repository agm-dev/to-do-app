import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from '../components/TodoList'
import AddTodoButton from '../components/AddTodoButton'

const todos = [
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
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TodoList todos={todos} />
    <AddTodoButton to="/page-2" />
  </Layout>
)

export default IndexPage
