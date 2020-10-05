import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserGigs = ({ gigs }) => {
	console.log(gigs);
	return (
		<article>
			<h3>My Performances</h3>
			{gigs &&
				Object.keys(gigs).map(gig => {
					console.log(gigs[gig]);
					return (
						<article key={gig.id}>
							<p className="profile-talent-profile-name">
								Talent Profile: {gig}
							</p>
							{gigs[gig].map(gigDetail => (
								<article className="profile-sub-item">
									<Link to={`/events/${gigDetail.event_id}`}>
										<p className="profile-sub-item-title">
											Event: {gigDetail.event_name}
										</p>
									</Link>
									<p>
										Performance period: {moment(gigDetail.start).format('LL')}{' '}
										to {moment(gigDetail.end).format('LL')}
									</p>
									{gigDetail.description && (
										<p>Message from organizer: {gigDetail.description}</p>
									)}
								</article>
							))}
						</article>
					);
				})}
		</article>
	);
};

export default UserGigs;
