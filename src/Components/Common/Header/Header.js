import React from 'react'
import { Link } from '@reach/router'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import classes from './styles.module.scss'
const { Header } = Layout

function HeaderComponent() {
  return (
    <Header className={classes.root}>
      <ul>
        <li>
          <h2>10</h2>
        </li>
        <Link to='/' className={classes.options}>
          <li>Mascostas para adopción</li>
        </Link>
        <Link to='/new-pet' className={classes.options}>
          <li>Agregar una nueva mascota</li>
        </Link>
      </ul>
    </Header>
  )
}

export default HeaderComponent
