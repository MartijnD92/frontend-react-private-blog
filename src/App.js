import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blog from './pages/Blog/Blog';
import BlogPosts from './pages/BlogPosts/BlogPosts';
import './App.css';

function App() {
	// We houden in de state bij of iemand is "ingelogd" (simpele versie)
	const [isAuthenticated, toggleIsAuthenticated] = useState(false);

	return (
		<>
			<TopNav
				isLoggedIn={isAuthenticated}
				toggleLogin={toggleIsAuthenticated}
			/>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login
						isLoggedIn={isAuthenticated}
						toggleLogin={toggleIsAuthenticated}
					/>
				</Route>
				<PrivateRoute path="/blogposts" isLoggedIn={isAuthenticated}>
					<BlogPosts />
				</PrivateRoute>
				<PrivateRoute exact path="/blog/:id" isLoggedIn={isAuthenticated}>
					<Blog />
				</PrivateRoute>
			</Switch>
		</>
	);
}

export default App;
