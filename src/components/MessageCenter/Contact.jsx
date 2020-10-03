import React from 'react';

const Contact = ({ name, onClick, selected }) => {
  const selectClass = selected ? "contact-selected" : "contact";

	return <button className={selectClass} onClick={onClick}>{name}</button>;
};
export default Contact;
