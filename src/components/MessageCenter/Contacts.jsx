import React from 'react';
import Contact from './Contact';

import './Contacts.scss'

const Contacts = ({ contactList, setRecipient, recipient }) => {
	const toggleRecipient = id => {
		id === recipient ? setRecipient('') : setRecipient(id);
	};
	return (
		<section className="message-center-contacts">
			{contactList.map(contact => {
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
