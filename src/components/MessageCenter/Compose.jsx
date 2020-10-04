import React, { useState } from 'react';
import axios from 'axios';

import './Compose.scss'

const Send = ({ recipient, setMessages }) => {
	const [text, setText] = useState();
	const changeHandler = event => setText(event.target.value);
	const submitHandler = event => {
		event.preventDefault();
		axios
			.post(`/api/messages`, {
				message: {
					recipient_id: recipient,
					content: text,
				},
			})
			.then(resolve => {
				setText('');
				setMessages(prev => [...prev, resolve.data.success]);
			})
			.catch(err => console.log('something is not working', err));
	};
	return (
		<form className="compose" onSubmit={submitHandler}>
			<textarea value={text} onChange={changeHandler} />
			<button type="submit">Send</button>
		</form>
	);
};

export default Send;
