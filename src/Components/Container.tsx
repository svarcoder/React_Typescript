import React from "react";

type ContainerProps = {
	styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
	return (
		<>
			<div style={props.styles}>I am playing Cricket</div>
		</>
	);
};

export default Container;
