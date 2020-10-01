import React from 'react';
import Contact from './Contact';

const Contacts = ({ contactList, setRecipient }) => {
	return (
		<section className="message-center-contacts">
			{contactList.map(contact => {
				return (
					<Contact
						key={contact.id}
						onClick={() => setRecipient(contact.id)}
						name={contact.name}
					/>
				);
			})}
		</section>
	);
};

export default Contacts;
