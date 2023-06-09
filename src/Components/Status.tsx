import React from "react";

type StatusProps = {
	status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
	let message;
	if (props.status === "loading") {
		message = "Loading...";
	} else if (props.status === "success") {
		message = "Data Fetching Success...";
	} else if (props.status === "error") {
		message = "error";
	}

	return (
		<>
			<h2>Status- {message}</h2>
		</>
	);
};

export default Status;
