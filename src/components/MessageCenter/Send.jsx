import React, { useState } from 'react';

const Send = props => {
	const { sender, recipient } = props;
	const [text, setText] = useState();
	const changeHandler = event => setText(event.target.value);
	const submitHandler = event => {
		event.preventDefault();
		const msg = { sender, recipient, text };
		alert(JSON.stringify(msg));
	};
	return (
		<form className="message-send" onSubmit={submitHandler}>
			<textarea value={text} onChange={changeHandler} />
			<button type="submit">Send</button>
		</form>
	);
};

export default Send;
