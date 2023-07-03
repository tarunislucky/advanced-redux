import { userInterfaceActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

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
					body: JSON.stringify({
						cartCount: cart.cartCount,
						items: cart.items
					})
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
		}
		try {
			await sendRequest();
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
export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch("https://react-http-485a4-default-rtdb.firebaseio.com/cart.json");
			const data = await response.json();
			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
			return data;
		}
		try {
			const data = await fetchData();
			if (data.cartCount !== 0) {
				dispatch(cartActions.replaceCart(data));
			}
		} catch (error) {
			console.log(error);
		}
	}
}