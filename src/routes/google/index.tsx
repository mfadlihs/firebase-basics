import React from "react";
import GoogleLogin from "react-google-login";
import { Config } from "tailwindcss";
import { gapi, loadGapiInsideDOM } from "gapi-script";

const GoogleAuth = () => {
	return (
		<>
			<div>
				<div className='mb-2 pb-10'>google</div>
				<div className='pt-10'>ini gugle</div>
			</div>
			<div className='g-signin2' data-onsuccess='onSignIn'>
				logasd
			</div>
			<button>p</button>
		</>
	);
};

export default GoogleAuth;
