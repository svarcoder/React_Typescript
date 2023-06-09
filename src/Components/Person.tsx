import React from "react";

type personProps = {
	allName: {
		firstName: string;
		lastName: string;
	};
};

const Person = (props: personProps) => {
	return (
		<>
			<h1>
				{props.allName.firstName} {props.allName.lastName}
			</h1>
		</>
	);
};

export default Person;
