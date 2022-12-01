import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Quest = (props: Props) => {
  return (
    <div><Link to="/quests">go to quests</Link></div>
  )
}

export default Quest