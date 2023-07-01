import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { cartCount: 0, cartVisibility: false, items: [] }
const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		increaseCount: (state, action) => {
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
		decreaseCount: (state, action) => {
			const itemToBeRemoved = action.payload;
			//check if item id already exists in items 
			const indexOfExistingItem = state.items.findIndex(item => item.id === itemToBeRemoved.id);
			const existingItem = state.items[indexOfExistingItem];
			//if exists then decrease the item count 
			if (indexOfExistingItem === -1) {
				return;
			}
			if (existingItem.quantity === 1) {
				state.items.splice(indexOfExistingItem, 1);
				state.cartCount -= 1;
				return;
			}
			existingItem.quantity -= 1;
		},
		toggleCartVisibility: (state) => {
			state.cartVisibility = !state.cartVisibility;
		}
	}
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;