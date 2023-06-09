import React from "react";

type OscarProps = {
	children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
	return (
		<>
			<h4>{props.children}</h4>
		</>
	);
};

export default Oscar;
