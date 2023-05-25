import { createSlice } from "@reduxjs/toolkit";
import backgroundReducer from "../reducers/background";

const backgroundSlice = createSlice({
    name: 'background',
    initialState: { value: { path: ""} },
    reducers: backgroundReducer
})

export default backgroundSlice