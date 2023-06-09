import React from "react";

export type ProfileProps = {
	name: string;
};

const Profile = ({ name }: ProfileProps) => {
	return <>Private Profile component. Name is {name}</>;
};

export default Profile;
