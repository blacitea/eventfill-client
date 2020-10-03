import React from 'react';
import Contact from './Contact';

import './ContactList.scss'

const Contacts = ({ contacts, setRecipient, recipient }) => {
	const toggleRecipient = id => {
		id === recipient ? setRecipient('') : setRecipient(id);
	};
	return (
		<section className="contact-list">
			{contacts.map(contact => {
				return (
					<Contact
            selected={recipient === contact.id}
						key={contact.id}
						onClick={() => toggleRecipient(contact.id)}
						name={contact.name}
					/>
				);
			})}
		</section>
	);
};

export default Contacts;
