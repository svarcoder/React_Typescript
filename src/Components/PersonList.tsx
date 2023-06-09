import React from "react";

type PersonListProps = {
	name: {
		first: string;
		last: string;
	}[];
};

const PersonList = (props: PersonListProps) => {
	return (
		<>
			{props.name.map((item, i) => (
				<h1 key={i}>
					{item.first} {item.last}
				</h1>
			))}
		</>
	);
};

export default PersonList;
