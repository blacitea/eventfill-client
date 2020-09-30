import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { talents, events, locations, genres } from './components/mockData';
import Index from './components/views/Index';
import Explore from './components/views/Explore';
import Create from './components/views/Create';
import Show from './components/views/Show';

// React router
import { Switch, Route } from 'react-router-dom';

// modal elements
import Calendar from './components/Calendar';
import InvitationForm from './components/forms/InvitationForm';
import EventForm from './components/forms/EventForm';
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
				{/* <EventForm locations={locations} genres={genres} /> */}
				<TalentForm locations={locations} categories={genres} />
        {/* <InvitationForm talent={talents[0]} events={events} /> */}
			</Modal>
			<NavBar />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
			<button onClick={openModal}>Open Modal</button>
			<Switch>
				<Route path="/create/:id">
					<Create locations={locations} genres={genres} />
				</Route>

				<Route path="/explore/:id">
					<Explore events={events} talents={talents} />
				</Route>

				<Route path="/:resource/:id">
					<Show
						events={events}
						talents={talents}
						locations={locations}
						genres={genres}
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
