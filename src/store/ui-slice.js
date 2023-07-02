import { createSlice } from "@reduxjs/toolkit";
const initialUISlice = { cartVisibility: false, notification: null }
const userInterfaceSlice = createSlice({
	name: "ui",
	initialState: initialUISlice,
	reducers: {
		toggleCartVisibility: (state) => {
			state.cartVisibility = !state.cartVisibility;
		},
		showNotification: (state, action) => {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			}
		}
	}
});
export const userInterfaceActions = userInterfaceSlice.actions;
export default userInterfaceSlice.reducer;