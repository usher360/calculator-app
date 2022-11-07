import { createAction, createReducer } from '@reduxjs/toolkit'

const addition = createAction('calc/addition')
const subtraction = createAction('calc/subtraction')
const multiplication = createAction('calc/multiplication')
const division = createAction('calc/division')

const initialState = { value: '' }

const calcReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addition, (state, action) => {
            state.value += '+'
        })
        .addCase(subtraction, (state, action) => {
            state.value += '-'
        })
        .addCase(multiplication, (state, action) => {
            state.value += '*'
        })
        .addCase(division, (state, action) => {
            state.value += '/'
        })
})

export default calcReducer