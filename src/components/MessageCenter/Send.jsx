import React, { useState } from 'react';
import axios from 'axios';

const Send = ({ sender, recipient, setMessages }) => {
	const [text, setText] = useState();
	const changeHandler = event => setText(event.target.value);
	const submitHandler = event => {
		event.preventDefault();
		axios
			.post(`/api/users/${sender}/messages`, {
				message: {
					sender_id: sender,
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
		<form className="message-send" onSubmit={submitHandler}>
			<textarea value={text} onChange={changeHandler} />
			<button type="submit">Send</button>
		</form>
	);
};

export default Send;
