import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoForm from '../components/TodoForm'

const SecondPage = () => (
  <Layout>
    <SEO title="Add todo" />
    <TodoForm />
  </Layout>
)

export default SecondPage
