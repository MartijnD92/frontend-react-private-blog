import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, isLoggedIn, ...rest }) {
	if (!isLoggedIn) {
		return <Redirect to={'/login'}/>
	}
	return (
		<Route {...rest}>
			{children}
		</Route>
	);
}

export default PrivateRoute;
