import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '@pages/Home/Home'
import Layout from '@components/Layout/Layout'

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
  )

export default AppRoutes
