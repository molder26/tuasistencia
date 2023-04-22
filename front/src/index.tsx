import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// const container = document.getElementById("root")!;
// const root = createRoot(container);

// console.log(process.env.REACT_APP_AUTH0_DOMAIN,
// 	process.env.REACT_APP_AUTH0_CLIENT_ID,
// );

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Auth0Provider
					domain="dev-o8v6r4c361nuu7wl.us.auth0.com"
					clientId="pJ5QUS79v5nj3NIXoalOu0VU4IUNjiWF"
					authorizationParams={{
						redirect_uri: window.location.origin
					}}
				>
					<App />
				</Auth0Provider>,
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
