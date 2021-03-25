import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function BlogPosts() {
	return (
		<>
			<h2>Blogposts</h2>
			<ol>
				{posts.map((value) => {
					return (
						<Link to={`blog/${value.id}`}>
							<li key={value.id}>{value.title}</li>
						</Link>
					);
				})}
			</ol>
		</>
	);
}

export default BlogPosts;
