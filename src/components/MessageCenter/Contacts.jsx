import React from 'react';
import Contact from './Contact';

const Contacts = ({ contactList, setRecipient }) => {
	return (
		<section className="message-center-contacts">
			{contactList.map(contact => {
				return (
					<Contact
						key={contact.id}
						id={contact.id}
						setRecipient={setRecipient}
						name={contact.name}
					/>
				);
			})}
		</section>
	);
};

export default Contacts;
