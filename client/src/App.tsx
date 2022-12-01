import React from 'react'
import { Routes, Route} from 'react-router-dom'

import './App.css'
import { 
  Nav 
} from './components'
import { 
  Home,
  SkillMain,
  Skills,
  Skill,
  Quests 
} from './pages'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills/*" element={<Skills/>}/>
        <Route path="/quests/*" element={<Quests/>}/>
      </Routes>
    </div>
  )
}

export default App
