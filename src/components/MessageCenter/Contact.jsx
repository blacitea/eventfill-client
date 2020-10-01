import React from 'react';

const Contact = ({ name, onClick }) => {
	return <button onClick={onClick}>{name}</button>;
};
export default Contact;
