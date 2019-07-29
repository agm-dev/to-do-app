import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <Button variant="contained" color="primary">
      Press me
    </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
