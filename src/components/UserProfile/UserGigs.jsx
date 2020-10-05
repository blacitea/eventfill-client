import React from 'react';
import moment from 'moment';

const UserGigs = ({ gigs }) => {
	console.log(gigs);
	return (
		<article>
			<h3>My Performances</h3>
			{gigs &&
				Object.keys(gigs).map((gig, index) => {
					console.log(gigs[gig]);
					return (
						<article key={index}>
							<p className="profile-talent-profile-name">
								Talent Profile: {gig}
							</p>
							{gigs[gig].map(gigDetail => (
								<article className="profile-sub-item">
									<p className="profile-sub-item-title">
										Event: {gigDetail.event_name}
									</p>
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
