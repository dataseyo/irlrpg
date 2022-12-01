import React, { useState} from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

import './styles.css'
import SkillCard from './SkillCard'
import Dialogue from '../Dialogue/Dialogue'

/* SKILL LIST COMPONENT

    - render a list of individual skills
    - allow user to manage skills
    - allow user to click on skills to open skill detail page
*/
const Skills = () => {
    // dummy state for skills, replace with redux store
    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "skill 1",
            level: 2,
            asset: ""
        },

        {
            id: 2,
            name: "skill 2",
            level: 10,
            asset: ""
        },

        {
            id: 3,
            name: "skill 3",
            level: 6,
            asset: ""
        },

        {
            id: 4,
            name: "skill 4",
            level: 1,
            asset: ""
        },
        
        {
            id: 5,
            name: "skill 5",
            level: 1,
            asset: ""
        },

        {
            id: 6,
            name: "skill 6",
            level: 1,
            asset: ""
        },

        {
            id: 7,
            name: "skill 7",
            level: 1,
            asset: ""
        },

        {
            id: 8,
            name: "skill 8",
            level: 1,
            asset: ""
        }
    ])

    return (
        <>
            <div className="skills__header">
                <button className="skills__add-button">Add Skill</button>
            </div>

            <div className="skills__container">
                {/* if user hasn't added any skills, prompt them to */}
                {
                    skills ? 
                    skills.map(skill => {
                        return (
                            <Link to={skill.name}>
                                <SkillCard
                                    {...skill}
                                />
                            </Link>
                        )
                    }) :
                    <div>No Skills yet...</div>
                }
            </div>

            {/* <Dialogue
                messages={["test this string", "eat chicken too"]}
            /> */}

        </>
    )
}

export default Skills