import { DatePicker } from "antd";
import React from "react";

function App() {
	const birthDate = "2022-08-17T00:00:00Z";

	return (
		<div>
			<div>haloo</div>
			<DatePicker defaultValue={new Date(birthDate)} />
		</div>
	);
}

export default App;
