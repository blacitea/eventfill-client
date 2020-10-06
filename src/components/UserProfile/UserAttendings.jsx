import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserAttendings = ({ attending }) => {
	console.log(attending);
	return (
		<article>
			{attending.length < 1 && (
				<p className="profile-error">
					You don't have any yet!{' \n '}
					<Link to="/explore/events">Let's change that! </Link>
				</p>
			)}
			{attending &&
				attending.map(attend => {
					return (
						<article className="profile-sub-item">
							<p className="profile-sub-item-title">Event: {attend.name}</p>
							<p>
								Event period: {moment(attend.start).format('LL')} to{' '}
								{moment(attend.end).format('LL')}
							</p>
						</article>
					);
				})}
		</article>
	);
};

export default UserAttendings;
