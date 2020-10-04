import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
	const [cookies, setCookie] = useCookies();
	const { id } = useParams();
	setCookie('user_id', id, { path: '/' });
	return <Redirect to="/" />;
};

export default Login;
