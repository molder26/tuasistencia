import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:3001";

export interface EmployeeState {
	values: any[];
}

const initialState: EmployeeState = {
	values: [],
};

type Employee = {
	name: string;
	dni: string;
	address?: string;
	phone?: string;
};

interface PutEmployee extends Employee {
	id: number;
}

export const fetchAllEmployees = createAsyncThunk(
	"employee/fetchAllEmployees",
	async () => {
		const response = await axios.get(API_URL + "/employee/wlogs");
		return response.data;
	}
);

export const putEmployee = createAsyncThunk(
	"employee/putEmployee",
	async ({ id, name, dni, address, phone }: PutEmployee) => {
		const response = await axios.put(API_URL + `/employee/${id}`, {
			name,
			dni,
			address: address !== "" ? address : null,
			phone: phone !== "" ? phone : null,
		});
		console.log(response.data);
		return response.data;
	}
);

export const createEmployee = createAsyncThunk(
	"employee/createEmployee",
	async ({ name, dni, address, phone }: Employee) => {
		const response = await axios.post(API_URL + `/employee/`, {
			name,
			dni,
			address,
			phone,
		});
		return response.data;
	}
);

export const deleteEmployee = createAsyncThunk(
	"employee/deleteEmployee",
	async (id: number) => {
		const response = await axios.delete(API_URL + `/employee/${id}`);
		return response.data;
	}
);

export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		increment: (state) => {
			state.values.push("se agrega un nuevo empleado");
		},
		// decrement: (state) => {
		// 	state.values.push("");
		// },
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.values.push(action.payload);
		// },
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchAllEmployees.fulfilled, (state, action) => {
			// Add user to the state array
			state.values = action.payload;
		});
		builder.addCase(putEmployee.fulfilled, (state, action) => {
			// Add user to the state array
			state.values = state.values.map((item) => {
				let { id, name, dni, address, phone } = item;
				if (item.id === action.payload.id) {
					id = action.payload.id;
					name = action.payload.name;
					dni = action.payload.dni;
					address = action.payload.address;
					phone = action.payload.phone;
				}

				return {
					id,
					name,
					dni,
					address,
					phone
				};
			});
		});
		builder.addCase(createEmployee.fulfilled, (state, action) => {
			// Add user to the state array
			state.values.push(action.payload);
		});
		builder.addCase(deleteEmployee.fulfilled, (state, action) => {
			// Add user to the state array
			state.values = state.values.filter(
				(item) => item.id !== action.payload.id
			);
		});
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
// 	employeeSlice.actions;

export default employeeSlice.reducer;
