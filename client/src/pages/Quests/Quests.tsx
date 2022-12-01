import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './styles.css'
import {
  Quests,
  Quest
} from '../../components'

type Props = {}

const QuestsPage = (props: Props) => {
  return (
    <>
    <h1>Test</h1>
    <Routes>
      <Route index element={<Quests/>}/>
      <Route path="quest" element={<Quest/>}/>
    </Routes>
    </>
  )
}

export default QuestsPage