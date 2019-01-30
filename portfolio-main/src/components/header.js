import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div><Link to="#work">Work</Link><Link to="#contact">Contact</Link></div>
  </header>
)

export default Header
