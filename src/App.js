import React, { useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Blog from './pages/Blog';
import BlogPosts from './pages/BlogPosts';
import './App.css';

function App() {
	// We houden in de state bij of iemand is "ingelogd" (simpele versie)
	const [isAuthenticated, toggleIsAuthenticated] = useState(false);

	return (
		<>
			<TopNav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/blogposts">
					<BlogPosts />
				</Route>
				<Route exact path="/blog/:id">
					<Blog />
				</Route>
			</Switch>
		</>
	);
}

export default App;
