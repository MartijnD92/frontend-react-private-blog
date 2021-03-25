import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav() {
	return (
		<nav>
			<div className="nav-container">
				<h4>Private Blog</h4>

				<ul>
					<li>
						<NavLink to="/" exact activeClassName="active-link">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to="/blogposts" activeClassName="active-link">
							Blogposts
						</NavLink>
					</li>

					<li>
						<NavLink to="/login" activeClassName="active-link">
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default TopNav;
