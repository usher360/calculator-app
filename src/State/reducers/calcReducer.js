import { createAction, createReducer } from '@reduxjs/toolkit'

const formula = createAction('calc/formula')

const initialState = { value: '' }

const calc = createReducer(initialState, (builder) => {
    builder
        .addCase(formula, (state, action) => {
            state.value = action.payload;
        })
})

export default calc