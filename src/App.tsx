import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Box from "./Components/Context/Box";
import { ThemeContextProvider } from "./Components/Context/ThemeContext";
import { UserContextProvider } from "./Components/Context/UserContext";
import Heading from "./Components/Heading";
import Home from "./Components/Home";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Counter from "./Components/State/Counter";
import LoggedIn from "./Components/State/LoggedIn";
import User from "./Components/Context/User";
import Status from "./Components/Status";
import DomRef from "./Components/Ref/DomRef";
import MutableRef from "./Components/Ref/MutableRef";
import { CounterClass } from "./Components/Class/Counter";
import Private from "./Components/Auth/Private";
import Profile from "./Components/Auth/Profile";
import CustomButton from "./Components/Html/Button";
import List from "./Components/Generics/List";
import RandomNumber from "./Components/Restriction/RandomNumber";
import Toast from "./Components/TemplateLiteral/Toast";
import Text from "./Components/Polymorphic/Text";

function App() {
	const personName = {
		firstName: "Subham",
		lastName: "Char",
	};

	const personList = [
		{
			first: "Ghsjj",
			last: "Bgtr",
		},
		{
			first: "Hgsd",
			last: "Jdgy",
		},
		{
			first: "Njusdy",
			last: "Ihgdsh",
		},
		{
			first: "Rgsh",
			last: "Khsdg",
		},
	];

	return (
		<div className='App'>
			{/* <Home name='Programing' messageCount={5} isLoggedIn={true} />
			<Person allName={personName} />
			<PersonList name={personList} />
			<Status status='loading' />
			<Heading>My Side</Heading>
			<Oscar>
				<Heading>Oscar Goes to Mr. Subham Char.</Heading>
			</Oscar> */}
			{/* <Button
				handleClick={(event, id) => {
					console.log("Button Clicked", event, id);
				}}
			/>
			<Input value='' handleChange={(event) => console.log(event)} />
			<Container styles={{ border: "1px solid red", padding: "5px" }} />
			<LoggedIn />
			<User />
			<Counter /> */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider> */}
			{/* <UserContextProvider>
				<User />
			</UserContextProvider> */}
			{/* <DomRef />
			<MutableRef /> */}
			{/* <CounterClass message='The count value is ' /> */}
			{/* <Private isLoggedIn={true} Component={Profile} /> */}
			{/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
			<List
				items={[
					{
						id: 1,
						first: "Bruce",
						last: "Wayne",
					},
					{
						id: 2,
						first: "Clark",
						last: "Kent",
					},
					{
						id: 3,
						first: "Princess",
						last: "Diana",
					},
				]}
				onClick={(item) => console.log(item)}
			/>
			<Toast position='center-bottom' />
			<CustomButton variant='primary' onClick={() => console.log("Clicked")}>
				Button Label
			</CustomButton>
			<RandomNumber value={10} isPositive />
			<Text size='lg' as='h2'>
				Heading
			</Text>
			<Text size='md' as='p'>
				Paragraph
			</Text>
			<Text size='sm' color='secondary' as='label' htmlFor='someId'>
				Label
			</Text>
		</div>
	);
}

export default App;
