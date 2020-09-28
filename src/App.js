import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import events from './components/mockData';

const App = props => {
	const [message, setMessage] = useState('Click the button to load data!');
	const fetchData = () => {
		axios
			.get('/api/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				// handle success
				console.log(response.data); // The entire response from the Rails API

				console.log(response.data.message); // Just the message
				setMessage(response.data.message);
			});
	};

	return (
		<div className="App">
			<NavBar />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
			<Calendar
				events={events}
				onClick={() => alert('Event clicked! pending url')}
				customButtons={{
					customs: {
						text: 'Add event',
						click: () => alert('You try to add an event!'),
					},
				}}
			/>
			<Footer />
		</div>
	);
};

export default App;
