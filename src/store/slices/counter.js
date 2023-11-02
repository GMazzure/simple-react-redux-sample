import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase: (state) => state + 1,
        decrease: (state) => state - 1
    }
})

export const { increase, decrease } = slice.actions;
export default slice.reducer