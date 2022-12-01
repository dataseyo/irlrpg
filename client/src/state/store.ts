import { configureStore } from "@reduxjs/toolkit";

import skillReducer from './skillSlice'

export const store = configureStore({
    reducer: {
        skill: skillReducer
    }
})

// export types
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch