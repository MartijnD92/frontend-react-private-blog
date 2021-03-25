import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
	<>
		<p>Hier inloggen:</p>
		<Link to="/blogposts">Inloggen</Link>
	</>
    )
}

export default Login;
