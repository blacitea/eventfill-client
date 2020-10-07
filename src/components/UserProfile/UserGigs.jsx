import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserGigs = ({ gigs }) => {
	return (
		<article>
			{Object.keys(gigs).length < 1 && (
				<p className="profile-error">
					You don't have any yet!{' \n   '}
					<Link to="/explore/events">Let's change that! </Link>
				</p>
			)}
			{gigs &&
				Object.keys(gigs).map((gig, index) => {
					return (
						<article key={index * 3}>
							<p className="profile-talent-profile-name">
								Talent Profile: {gig}
							</p>
							{gigs[gig].map((gigDetail, index) => (
								<article key={index * 100} className="profile-sub-item">
									<Link to={`/events/${gigDetail.event_id}`}>
										<p className="profile-sub-item-title">
											Event: {gigDetail.event_name}
										</p>
									</Link>
									<p>
										Performance period: {moment(gigDetail.start).format('LL')}{' '}
										to {moment(gigDetail.end).format('LL')}
									</p>
								</article>
							))}
						</article>
					);
				})}
		</article>
	);
};

export default UserGigs;
