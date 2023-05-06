import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";


const API_URL = import.meta.env.VITE_API_URL;

export interface userState {
    idUser: string;
}

type User = {
    idUser: string;
};

const initialState: userState = {
    idUser: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.idUser = action.payload
        },
        resetUser: (state) => {
            state.idUser = "";
        }
    },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;