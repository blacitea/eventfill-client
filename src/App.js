import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Home from './components/views/Home';
import Explore from './components/views/Explore';
import Create from './components/views/Create';
import Show from './components/views/Show';
import Login from './components/Login';
import MessageCenter from './components/MessageCenter';
// Test Calendar

// React router
import { Switch, Route } from 'react-router-dom';

// hooks
import useModal from './hooks/useModal';

// const demoInviteForm = <InvitationForm talent={talents[0]} events={events} />;

// const demoEventForm = <EventForm locations={locations} genres={genres} />;

// const demoTalentForm = <TalentForm locations={locations} categories={genres} />;

const App = props => {
	const [cookies, setCookie] = useCookies(['user_id']);

	const { modalState, openModal, closeModal } = useModal();

	//Setup
	const [base, setBase] = useState({ locations: [], genres: [] });
	useEffect(() => {
		Promise.all([axios.get('/api/genres'), axios.get('/api/locations')]).then(
			resolve => {
				setBase({
					genres: resolve[0].data,
					locations: resolve[1].data,
				});
			}
		);
	}, []);

	return (
		<div className="App">
			<Modal
				isOpen={modalState.open}
				close={closeModal}
				content={modalState.content}
			/>
			<NavBar openModal={openModal} />

			<Switch>
				<Route path="/login/:id">
					<Login setCookie={setCookie} />
				</Route>

				<Route path="/create/:id">
					<Create {...base} />
				</Route>

				<Route path="/explore/:id">
					<Explore {...base} />
				</Route>

				<Route path="/messages">
					<MessageCenter />
				</Route>

				<Route path="/:resource/:id">
					<Show openModal={openModal} {...base} />
				</Route>

				<Route path="/">
					<div className="debug-panel">
						{/* <h1>{'Debug'}</h1> */}
						{/* <button onClick={fetchData}>Fetch Data</button> */}
						<div>
							{/* <button onClick={() => openModal(demoCalendar)}>
								Calendar Modal
							</button> */}
							{/* <button onClick={() => openModal(demoEventForm)}>
								Event Modal
							</button>
							<button onClick={() => openModal(demoTalentForm)}>
								Talent Modal
							</button>
							<button onClick={() => openModal(demoInviteForm)}>
								Invite Modal
							</button> */}
						</div>
					</div>

					<Home />
				</Route>
			</Switch>

			<Footer />
		</div>
	);
};

export default App;
