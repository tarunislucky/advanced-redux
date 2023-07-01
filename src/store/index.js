import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import userInterfaceReducer from "./ui-slice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		ui: userInterfaceReducer
	}
})

export default store;