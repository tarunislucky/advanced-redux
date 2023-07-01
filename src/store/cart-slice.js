import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartCount: 0, items: [] }
const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		insertItemToCart: (state, action) => {
			const newItem = action.payload;
			//check if item id already exists in items 
			const existingItem = state.items.find(item => item.id === newItem.id);
			//if does not exist already, push
			if (!existingItem) {
				state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
				state.cartCount++;
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
			}
		},
		removeItemFromCart: (state, action) => {
			const id = action.payload;
			//check if item id already exists in items 
			const existingItem = state.items.find(item => item.id === id);
			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== existingItem.id)
				state.cartCount--;
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		}
	}
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;