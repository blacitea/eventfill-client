import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserAttendings = ({ attending }) => {
	return (
		<article>
			{attending.length < 1 && (
				<p className="profile-error">
					You don't have any yet!{' \n '}
					<Link to="/explore/events">Let's change that! </Link>
				</p>
			)}
			{attending &&
				attending.map((attend, index) => {
					return (
						<article key={index} className="profile-sub-item">
              <Link to={`/events/${attend.event_id}`} >
                <p className="profile-sub-item-title">Event: {attend.name}</p>
                <p>
                  Event period: {moment(attend.start).format('LL')} to{' '}
                  {moment(attend.end).format('LL')}
                </p>
              </Link>
						</article>
					);
				})}
		</article>
	);
};

export default UserAttendings;
