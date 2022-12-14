import { createAction, createReducer } from '@reduxjs/toolkit'

const addToHistory = createAction('history/add');
const clearHistory = createAction('history/clear');
const setStackSize = createAction('history/setSize');

const initialState = { value: [], stackSize: 20, totalActions: 0 }

const buttonHistory = createReducer(initialState, (builder) => {
    builder
        .addCase(addToHistory, (state, action) => {
            state.totalActions++;
            state.value.length === state.stackSize && state.value.shift();
            state.value.push({value: action.payload, id: state.totalActions});
        })
        .addCase(clearHistory, (state, action) => {
            state.totalActions = 0;
            state.value = [];
        })
        .addCase(setStackSize, (state, action) => {
            state.stackSize = action.payload;
        })
})

export default buttonHistory