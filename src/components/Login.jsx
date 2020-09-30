import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const Login = props => {
	const { id } = useParams();
	console.log(id);
	props.setCookie('user_id', id, { path: '/' });
	return <Redirect to="/" />;
};

export default Login;
