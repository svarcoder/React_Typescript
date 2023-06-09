import React from "react";
import Home from "../Home";

const CustomComponent = (props: React.ComponentProps<typeof Home>) => {
	return (
		<>
			<div>{props.name}</div>
		</>
	);
};

export default CustomComponent;
