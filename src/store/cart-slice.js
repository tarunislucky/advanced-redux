import { createSlice } from "@reduxjs/toolkit";
import { userInterfaceActions } from "./ui-slice";
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
// action creator/ thunk
export const sendCartData = (cart) => {
	return async (dispatch) => {
		// In an async function there are multiple sync parts
		// all dispatches/state updates that come in each sync part are batched and executed separately
		dispatch(userInterfaceActions.showNotification({
			status: "pending",
			title: "Sending",
			message: "Sending cart data..."
		}));
		const sendRequest = async () => {
			const response = await fetch("https://react-http-485a4-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart)
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
		}
		try {
			const response = await sendRequest();
			dispatch(userInterfaceActions.showNotification({
				status: "success",
				title: "Sucess",
				message: "Sent cart data successfully!"
			}));
		} catch (error) {
			dispatch(userInterfaceActions.showNotification({
				status: "error",
				title: "Error !",
				message: "sending cart data failed!"
			}));
		}
	}
}
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;