import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

export const createUser = createAsyncThunk(
	"user/createUser",
	async ({ idUser }: User) => {
		const response = await axios.post(API_URL + `/user/`, {
			idUser,
		});
		console.log(idUser);
		return response.data;
	}
);

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
    extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(createUser.fulfilled, (state, action) => {
			// Add user to the state array
			state.idUser = action.payload;
		});
    }
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;