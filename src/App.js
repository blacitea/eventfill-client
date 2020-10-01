import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
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
import Login from './components/Login';
import MessageCenter from './components/MessageCenter';

// React router
import { Switch, Route } from 'react-router-dom';

// hooks
import useModal from './hooks/useModal'

// modal elements
import Calendar from './components/Calendar';
import InvitationForm from './components/forms/InvitationForm';
import EventForm from './components/forms/EventForm';
import TalentForm from './components/forms/TalentForm';

const demoCalendar = (
  <Calendar
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
  /> 
);

const demoInviteForm = (
  <InvitationForm talent={talents[0]} events={events} />
);

const demoEventForm = (
  <EventForm locations={locations} genres={genres} />
);

const demoTalentForm = (
  <TalentForm locations={locations} categories={genres} />
);

const App = props => {
	const [cookies, setCookie] = useCookies(['user_id']);

	const [message, setMessage] = useState('Click the button to load data!');
  const {modalState, openModal, closeModal} = useModal();

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
			<Modal isOpen={modalState.open} close={closeModal} content={modalState.content} />
			<NavBar cookies={cookies} />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
      <div>
		  	<button onClick={() => openModal(demoCalendar)}>Calendar Modal</button>
        <button onClick={() => openModal(demoEventForm)}>Event Modal</button>
        <button onClick={() => openModal(demoTalentForm)}>Talent Modal</button>
        <button onClick={() => openModal(demoInviteForm)}>Invite Modal</button>
      </div>
			<Switch>
				<Route path="/login/:id">
					<Login setCookie={setCookie} />
				</Route>

				<Route path="/create/:id">
					<Create locations={locations} genres={genres} />
				</Route>

				<Route path="/explore/:id">
					<Explore events={events} talents={talents} />
				</Route>

				<Route path="/messages">
					<MessageCenter />
				</Route>

				<Route path="/:resource/:id">
					<Show
						openModal={openModal}
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
