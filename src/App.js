import React from "react";
import UserContextProvider from "./context";
import Screen from "./Components/Screen";

const App = () => {
	return (
		<UserContextProvider>
			<Screen />
		</UserContextProvider>
	);
};

export default App;
