import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = props => {
  const [message, setMessage] = useState('Click the button to load data!');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

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
      <Modal 
        isOpen={modalIsOpen}
        close={closeModal}
      >
        Some cool modal content can go here!
      </Modal>
			<NavBar />
			<h1>{message}</h1>
			<button onClick={fetchData}>Fetch Data</button>
      <button onClick={openModal}>Open Modal</button>
			<Footer />
		</div>
	);
};

export default App;
