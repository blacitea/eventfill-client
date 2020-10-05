import React from 'react';

const UserInfo = ({ info }) => {
	console.log(info);
	return (
		<article>
			<p>Name : {info.name}</p>
			<p>Email : {info.email}</p>
		</article>
	);
};

export default UserInfo;
