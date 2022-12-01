import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const SkillMain = (props: Props) => {
  return (
    <div>
        <h1>Skills</h1>
        <Outlet/>
    </div>
  )
}

export default SkillMain