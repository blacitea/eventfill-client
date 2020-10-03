import React from 'react';

import './Contact.scss'

const Contact = ({ name, onClick, selected }) => {
  const selectClass = selected ? "contact-selected" : "contact";

	return <button className={selectClass} onClick={onClick}>{name}</button>;
};
export default Contact;
