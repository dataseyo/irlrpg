import React, { useState } from 'react'

type Skill = {
  id: number,
  level: number,
  name: string,
  asset: string
}

/* SKILL DETAIL COMPONENT
    
    - opened when user clicks on a SkillCard component within the Skills list
*/
const SkillDetail = ({
  id,
  level,
  name,
  asset
}: Skill) => {
  // dummy tasks state, replace with redux store
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "do something",
      xp: 10
    },

    {
      id: 2,
      text: "get big",
      xp: 100
    }
  ])
  return (
    <div>SkillDetail</div>
  )
}

export default SkillDetail