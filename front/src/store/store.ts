import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import employeeSlice from "./slices/employee/employeeSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
    reducer: {
        employees: employeeSlice,
        users: userSlice,

    },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
