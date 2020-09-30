import React from 'react';

const Contact = ({ name, setRecipient, id }) => {
	return <button onClick={() => setRecipient(id)}>{name}</button>;
};
export default Contact;
