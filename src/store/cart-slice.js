import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartCount: 0, cartVisible: false, items: [] }
const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addItem: (state) => {

		},
		removeItem: (state) => {

		},
		setCartCount: (state) => {

		},
		toggleCartVisibility: (state) => {
			state.cartVisible = !state.cartVisible;
		}
	}
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;