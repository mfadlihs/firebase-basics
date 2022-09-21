import { configureStore, createSlice } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const storeRedux = configureStore({
	reducer: {
		todos: {},
	},
});
