import React from 'react';
import UserGig from './UserGig';

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
							<p>Talent Profile's Name: {gig}</p>
							{gigs[gig].map(gigDetail => (
								<UserGig gigDetails={gigDetail} />
							))}
						</article>
					);
				})}
		</article>
	);
};

export default UserGigs;
