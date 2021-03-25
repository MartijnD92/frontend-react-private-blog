import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts.json';

function Blog() {
    const { id } = useParams();

    const filteredPost = (id) => posts.filter(p => p.id === id);
    const { title, content } = filteredPost(id)[0];

	return (
		<>
			<h2>Blog entry {id}: {title}</h2>
			<p>{content}</p>
		</>
	);
}

export default Blog;
