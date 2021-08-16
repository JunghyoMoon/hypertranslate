import React from "react";
import { useUser } from "../context";

const Header = () => {
	const { name, loggedIn } = useUser();
	return (
		<div>
			<span>
				Hello, {name}! You are {loggedIn ? "online" : "offline"}
			</span>
		</div>
	);
};

export default Header;
