import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';

function Login({ isLoggedIn, toggleLogin }) {
	return (
		<>
			{isLoggedIn ? (
				<>
					<h2>Welkom, Gebruiker</h2>
					<Link to="/" onClick={() => toggleLogin(!isLoggedIn)}>
						Uitloggen
					</Link>
				</>
			) : (
				<>
					<p>Voor toegang tot deze pagina dien je eerst in te loggen:</p>

					<label htmlFor="username">Gebruikersnaam</label>
					<input type="text" name="username"/>
					<label htmlFor="password">Wachtwoord</label>
					<input type="password"/>

					<Link to="/blogposts" onClick={() => toggleLogin(!isLoggedIn)}>
						Inloggen
					</Link>
				</>
			)}
		</>
	);
}

export default Login;
