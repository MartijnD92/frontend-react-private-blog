import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';
import styles from './BlogPosts.module.css';

function BlogPosts() {
	const truncateString = (str, len) => {
		if (str.length < len) return str;
		return str.slice(0, len) + '...';
	};

	return (
		<>
			<h1>The Blog</h1>
			{posts.map((value) => {
				return (
					<>
						<Link key={value.id} to={`blog/${value.id}`}>
							<div className={styles.card}>
								<h3>{value.title}</h3>
								<p>{truncateString(value.content, 150)}</p>
								<button type="button">Read More</button>
							</div>
						</Link>
					</>
				);
			})}
		</>
	);
}

export default BlogPosts;
