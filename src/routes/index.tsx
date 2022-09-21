import React, { useState } from "react";

const Home = () => {
	const [a, setA] = useState<number>(10);
	return <div className='mb-4'>{a}</div>;
};

export default Home;
