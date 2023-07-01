import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartCount: 0, cartVisible: false, items: [] }
const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addItem: (state, action) => {
			const itemToBeAdded = action.payload;
			//check if item id already exists in items 
			const indexOfExistingItem = state.items.findIndex(item => item.id === itemToBeAdded.id);
			const existingItem = state.items[indexOfExistingItem];
			//if exists then increase the item count , else push
			if (indexOfExistingItem !== -1) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...itemToBeAdded, quantity: 1 });
				state.cartCount += 1;
			}
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