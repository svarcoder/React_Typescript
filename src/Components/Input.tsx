import React from "react";

type InputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("====================================");
		console.log(event);
		console.log("====================================");
	};

	return (
		<>
			<input type='text' value={props.value} onChange={handleChange} />
		</>
	);
};

export default Input;
