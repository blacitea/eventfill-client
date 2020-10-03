import React, { useState } from 'react';

import axios from 'axios';
import './PendingInvite.scss';

const PendingInvite = ({ pendingGig, updateHighlight }) => {
	console.log(pendingGig);
	const [rvsp, setRVSP] = useState(pendingGig.accepted);
	const handleClick = response => {
		axios
			.patch(`/api/gigs/${pendingGig.id}`, {
				gig: { ...pendingGig, accepted: response },
			})
			.then(resolve => {
				setRVSP(response);
				updateHighlight();
			})
			.catch(error => console.log('Error!', error));
	};

	return (
		<article className="event-invite">
			<p className="event-invite-tag">
				You have an invitation to perform at this event!
			</p>
			{rvsp === null && (
				<section className="event-invite-options">
					<button
						className="event-invite-btn-accept"
						onClick={() => handleClick(true)}
					>
						Accept
					</button>
					<button
						className="event-invite-btn-decline"
						onClick={() => handleClick(false)}
					>
						Decline
					</button>
				</section>
			)}
			<article className="event-invite-response">
				{rvsp === true && 'Invitation was accepted!'}
				{rvsp === false && 'Invitation was declined!'}
			</article>
		</article>
	);
};

export default PendingInvite;
