import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import {
  useAppSelector,
  useAppDispatch  
} from '../../../state/hooks'

type Skill = {
  id: number,
  level: number,
  name: string,
  asset: string
}

/* SKILL DETAIL COMPONENT
    
    - opened when user clicks on a SkillCard component within the Skills list
    - get data from redux store, and filter data by skill id with useParams
*/
const SkillDetail = () => {
  const params = useParams()
  console.log(params)

  const skills = useAppSelector((state) => state.skill)
  const skill = skills.filter(s => s.name == params.name)
  console.log(skill)

  return (
    <div>
      <h1>Skill Detail</h1>
      <Link to="/skills">Back</Link>
      <p>{JSON.stringify(skill)}</p>
    </div>
  )
}

export default SkillDetail