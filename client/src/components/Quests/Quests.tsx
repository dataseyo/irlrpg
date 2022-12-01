import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Quests = (props: Props) => {
  return (
    <div><h1>List</h1><Link to="quest">go to quest</Link></div>
  )
}

export default Quests