import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.css';

function TopNav({ isLoggedIn, toggleLogin }) {
	return (
		<nav>
			<div className={styles['nav-container']}>
				<ul>
					<li>
						<NavLink to="/" exact activeClassName={styles['active-link']}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to="/blogposts" activeClassName={styles['active-link']}>
							Blogposts
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/login"
							activeClassName={styles['active-link']}
							onClick={() => toggleLogin(!isLoggedIn)}
						>
							{!isLoggedIn ? 'Log in' : 'Log out'}
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default TopNav;
