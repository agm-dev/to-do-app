import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoForm from '../components/TodoForm'

export default () => (
  <Layout>
    <SEO title="Add" />
    <TodoForm />
  </Layout>
)
