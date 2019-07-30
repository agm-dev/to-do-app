/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { TodosProvider } from './src/context/TodosContext'

export const wrapRootElement = ({ element }) => (
  <TodosProvider>
    {element}
  </TodosProvider>
)
