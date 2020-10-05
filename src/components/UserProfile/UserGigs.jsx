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
							<p>
								<UserGig gigDetails={gigs[gig]} />
							</p>
						</article>
					);
				})}
		</article>
	);
};

export default UserGigs;
