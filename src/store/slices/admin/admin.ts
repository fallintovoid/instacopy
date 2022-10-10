import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "./admin.interface";

export const initialState = {
    amountOfUsersForRequest: 5
} as AdminState

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {}
})

export default adminSlice.reducer