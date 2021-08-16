import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: "hyo",
		loggedIn: false,
	});
	const logIn = () => setUser({ ...user, loggedIn: true });
	const logOut = () => setUser({ ...user, loggedIn: false });

	return (
		<UserContext.Provider value={{ user, fn: { logIn, logOut } }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const { user } = useContext(UserContext);
	return user;
};

export const useFns = () => {
	const { fn } = useContext(UserContext);
	return fn;
};

export default UserContextProvider;
