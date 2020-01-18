import React from 'react'
import { Router } from '@reach/router'
import { Layout } from 'antd'

import { Routes } from '../Routes'
import Header from '../Components/Common/Header'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header />
      <Content>
        <Router>
          {Routes.map((Route, index) => {
            const { Component, path } = Route
            return <Component path={path} />
          })}
        </Router>
      </Content>
    </Layout>
  )
}

export default App
