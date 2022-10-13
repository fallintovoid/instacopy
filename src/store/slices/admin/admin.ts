import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "./admin.interface";

export const initialState: AdminState = {
    amountOfUsersForRequest: 5
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {}
})

export default adminSlice.reducer