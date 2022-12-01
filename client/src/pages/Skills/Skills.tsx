import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

import './styles.css'
import {
    Skills,
    SkillCard,
    SkillDetail
} from '../../components'
import {
  useAppSelector,
  useAppDispatch  
} from '../../state/hooks'

const SkillsPage = () => {
  return (
    <>
      <h2>Skills</h2>
      <Routes>
        <Route index element={
          <Skills/>
        }/>
        <Route 
          path=":name"
          element={
            <SkillDetail/>
          }
        />
      </Routes>
    </>
  )
}

export default SkillsPage