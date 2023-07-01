import { createSlice } from "@reduxjs/toolkit";
const initialUISlice = { cartVisibility: false }
const userInterfaceSlice = createSlice({
	name: "ui",
	initialState: initialUISlice,
	reducers: {
		toggleCartVisibility: (state) => {
			state.cartVisibility = !state.cartVisibility;
		}
	}
});
export const userInterfaceActions = userInterfaceSlice.actions;
export default userInterfaceSlice.reducer;