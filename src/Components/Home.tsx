import React from "react";

type HomeProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
	count?: number;
};

const Home = (props: HomeProps) => {
	const { count = 0 } = props;
	return (
		<>
			{props.isLoggedIn ? (
				<>
					<h1>Welcome to {props.name} world.</h1>
					<p>You have {props.messageCount} messages.</p>
					<p>You have {props.count} unread messages.</p>
				</>
			) : (
				<h1>Welcome Guest</h1>
			)}
		</>
	);
};

export default Home;
