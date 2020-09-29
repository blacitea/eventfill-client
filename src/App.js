import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { talents, events } from './components/mockData';
import PreviewsList from './components/PreviewsList';
import HighlightsList from './components/HighlightsList';

/* Modal test
import Calendar from './components/Calendar';
import Invite from './components/Invite';
*/
import EventForm from './components/EventForm';

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
				<EventForm />
			</Modal>
			<NavBar />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
			<button onClick={openModal}>Open Modal</button>
			<PreviewsList title={'Events Highlights'} array={events} />
			<HighlightsList title={'Our hottest talents'} array={talents} />
			<Footer />
		</div>
	);
};

export default App;
