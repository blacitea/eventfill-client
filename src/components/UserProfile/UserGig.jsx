import React from 'react';
import moment from 'moment';

const UserGig = ({ gigDetails }) => {
	return (
		<article>
			<p>Event: {gigDetails.event_name}</p>
			<p>
				Performance period: {moment(gigDetails.start).format('LL')} to{' '}
				{moment(gigDetails.end).format('LL')}
			</p>
			{gigDetails.description && (
				<p>Message from organizer: {gigDetails.description}</p>
			)}
		</article>
	);
};
export default UserGig;
