import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        level: 1,
        name: "Climbing",
        asset: "climbing icon",
        tasks: [
            {
                id: 1,
                xp: 10,
                name: "climb small rock",
                asset: "rock"
            },

            {
                id: 2,
                xp: 20,
                name: "climb medium rock",
                asset: "rock 2"
            },
        ]
    },

    {
        id: 2,
        level: 9,
        name: "Eating",
        asset: "eating icon",
        tasks: [
            {
                id: 1,
                xp: 6,
                name: "eat small food",
                asset: "rock"
            },

            {
                id: 2,
                xp: 20,
                name: "eat medium food",
                asset: "rock 2"
            },
        ]
    }
]

const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        /* 
            Take in action.payload as Skill object, update Skills[] state
            {
                id: number,
                level: 1, (default)
                name: string,
                asset: string, (selected icon)
                tasks [] (empty array to be added to with addTaskToSkill)
            }
        */
        addSkill: (state, action) => {

        },

        /* 
            Take in action.payload as Task object and Skill id, 
            update subset of state that matches the Skill id
        */
        addTaskToSkill: (state, action) => {

        }
    }
})

// export actions
export const {
    addSkill, 
    addTaskToSkill
} = skillSlice.actions

// export reducer
export default skillSlice.reducer