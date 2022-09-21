import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./routes/index";
import GoogleAuth from "./routes/google/index";

const Router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Home />} />
			<Route path='/google' element={<GoogleAuth />} />
		</>
	)
);

export default Router;
