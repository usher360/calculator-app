import { createAction, createReducer } from '@reduxjs/toolkit'

const setUser = createAction('user/set')
const removeUser = createAction('user/remove')

const initialState = { value: null }

const currentUser = createReducer(initialState, (builder) => {
    builder
        .addCase(setUser, (state, action) => {
            state.value = action.payload;
        })
        .addCase(removeUser, (state, action) => {
            state.value = null;
        })
})

export default currentUser