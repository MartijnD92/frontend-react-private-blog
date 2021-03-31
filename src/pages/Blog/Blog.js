import React, { useState } from 'react';
import styles from './Blog.module.css';
import { useParams } from 'react-router-dom';
import posts from '../../data/posts.json';

function Blog() {
	const [fullText, toggleFullText] = useState(false);

	const { id } = useParams();

	const filteredPost = (id) => posts.filter((p) => p.id === id);
	const { title, content, date } = filteredPost(id)[0];

	const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		return date.toLocaleString('nl', options);
	};

	return (
		<div className={styles['blog-content']}>
			<h2>
				Blog {id}: {title}
			</h2>
			<p>{content}</p>
			<hr />
			<span className={styles['publish-date']}>{formatDate(date)}</span>
		</div>
	);
}

export default Blog;
