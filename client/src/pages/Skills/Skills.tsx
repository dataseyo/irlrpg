import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

import './styles.css'
import {
    Skills,
    SkillCard
} from '../../components'

const SkillsPage = () => {
  return (
    <>
      <h2>Skills</h2>
      <Routes>
        <Route index element={<Skills/>}/>
        <Route 
          path=":name"
          element={
            <SkillCard 
              id={1}
              level={1}
              asset="1"
              name="test"
            />
          }
        />
      </Routes>
    </>
  )
}

export default SkillsPage