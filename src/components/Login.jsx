import React, { useContext, useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const Login = ({ setUserId, setCookie }) => {
	const { id } = useParams();
	const [flag, setFlag] = useState(false);

	console.log('Login.jsx will set the cookie to', id);
	useEffect(() => {
		return () => setCookie('user_id', id, { path: '/' });
	}, [id]);

	return <Redirect to="/" />;

	// if (!flag) {
	// 	setCookie('user_id', id, { path: '/' });
	// 	setFlag(true);
	// 	return <span></span>;
	// } else {
	// 	return <Redirect to="/" />;
	// }

	// const { cookies, setCookies } = useContext(UserContext);
	// useEffect(() => {
	// 	setCookies(prev => ({ ...prev, user_id: id }));
	// 	// setUserId(id);
	// });
	// setCookie('user_id', id, { path: '/' });
	// console.log('Id from params is:', id);
	// return <p>Hello</p>;
	// window.location.href = '/';		// highly questionable.  but successful.
	// return <Redirect to="/" />;
};

export default Login;
