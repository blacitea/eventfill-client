import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { talents, events, locations, categories } from './components/mockData';
import Index from './components/views/Index';
import ExploreEvents from './components/views/ExploreEvents';

// React router
import { Switch, Route } from 'react-router-dom';

/* Modal test
import Calendar from './components/Calendar';
import Invite from './components/Invite';
import InvitationForm from './components/forms/InvitationForm';
import EventForm from './components/forms/EventForm';
*/
import TalentForm from './components/forms/TalentForm';

const App = props => {
	const [message, setMessage] = useState('Click the button to load data!');
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

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
			<Modal isOpen={modalIsOpen} close={closeModal}>
				{/* <Calendar
					events={events}
					onClick={() => alert('Event clicked! pending url')}
					buttonName={'Whatever'}
					customButtons={{
						Whatever: {
							text: 'Whatever button you want',
							click: () => {
								alert('add logic for button click');
							},
						},
					}}
				/> */}
				{/* <Invite
					talent={talents[1]}
					options={events.filter(event => event.user_id === 1)}
				/> */}
				{/* <EventForm locations={locations} categories={categories} /> */}
				<TalentForm locations={locations} categories={categories} />
			</Modal>
			<NavBar />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
			<button onClick={openModal}>Open Modal</button>
			<Switch>
				<Route path="/events">
					<ExploreEvents
						events={events}
						onClick={() =>
							alert('Clicked! I do not know what do to about the click yet')
						}
					/>
				</Route>
				<Route path="/">
					<Index
						events={events}
						talents={talents}
						onClick={() =>
							alert('Clicked! I do not know what do to about the click yet')
						}
					/>
				</Route>
			</Switch>

			<Footer />
		</div>
	);
};

export default App;
