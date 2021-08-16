import React from "react";
import Header from "./Header";
import { useFns } from "../context";

const Screen = () => {
	const { logIn, logOut } = useFns();
	return (
		<div>
			<Header />
			<button onClick={logIn}>Log In</button>
			<button onClick={logOut}>Log Out</button>
		</div>
	);
};

export default Screen;
