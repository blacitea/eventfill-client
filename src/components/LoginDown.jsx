import React from 'react';
import { useCookies } from 'react-cookie';

const LoginDown = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

	return (
		<ul className="drop-down-login">
			<li onClick={() => setCookie('user_id', 1, { path: '/' })}>User 1</li>

			<li onClick={() => setCookie('user_id', 2, { path: '/' })}>User 2</li>

			<li onClick={() => setCookie('user_id', 3, { path: '/' })}>User 3</li>

			<li onClick={() => setCookie('user_id', 4, { path: '/' })}>User 4</li>

			<li onClick={() => setCookie('user_id', 5, { path: '/' })}>User 5</li>

			<li onClick={() => removeCookie('user_id')}>Logout</li>
		</ul>
	);
};

export default LoginDown;
