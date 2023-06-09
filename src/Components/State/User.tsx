import React, { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const handleLogin = () => {
		setUser({
			name: "Vishwas",
			email: "vishwas@example.com",
		});
	};

	// const handleLogout = () => {
	// 	setUser(null);
	// };

	return (
		<>
			<button onClick={handleLogin}>Login</button>
			{/* <button onClick={handleLogout}>Logout</button> */}
			<div>User name is {user.name}</div>
		</>
	);
};

export default User;
