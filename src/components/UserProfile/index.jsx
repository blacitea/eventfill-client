import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import UserEvents from './UserEvents';
import UserGigs from './UserGigs';
import UserAttendings from './UserAttendings';
import axios from 'axios';
import './index.scss';

const UserProfile = props => {
	const [cookies] = useCookies();
	const owner = cookies.user_id;
	const [userData, setUserData] = useState({
		user: {},
		owned_events: [],
		attending: [],
		gigs: [],
	});
	useEffect(() => {
		if (owner !== undefined) {
			axios.get(`api/users/${owner}`).then(resolve => {
				let data = resolve.data;
				setUserData({ ...data });
			});
		}
	}, [owner]);
	return (
		<main className="user-profile">
			{!owner && <h1>Please login to view your profile</h1>}
			{owner && userData.user && (
				<>
					<h1 className="profile-main-title">My Profile</h1>

					<section className="profile-info">
						<h3>My Info</h3>
						<p>Name : {userData.user.name}</p>
						<p>Email : {userData.user.email}</p>
					</section>

					<section className="profile-events">
						<UserEvents events={userData.owned_events} />
					</section>

					<section className="profile-gigs">
						<UserGigs gigs={userData.gigs} />
					</section>

					<section className="profile-attendings">
						<UserAttendings attending={userData.attending} />
					</section>
				</>
			)}
		</main>
	);
};

export default UserProfile;
