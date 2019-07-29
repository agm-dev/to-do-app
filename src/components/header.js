import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

import Menu from './Menu'

const Header = ({ siteTitle }) => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Menu />
        <Link to="/" >
          <Typography variant="h6">{siteTitle}</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
