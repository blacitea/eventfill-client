import React from 'react';

import './Preview.scss';

const Preview = props => {
	return (
		<article className="preview-card">
			<img
				className="preview-cover"
				src={props.imageURL}
				alt={props.name}
			></img>
			<div className="preview-info">
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<a href={props.url}>Read More</a>
			</div>
		</article>
	);
};

export default Preview;
