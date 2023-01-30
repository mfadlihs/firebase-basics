import App from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
		{/* <RouterProvider router={Router} /> */}
	</React.StrictMode>
);
