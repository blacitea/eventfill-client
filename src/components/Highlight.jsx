import React from 'react';

import './Highlight.scss';

const Highlight = ({ imageURL, name }) => {
	return (
		<section className="highlight-container">
			<figure className="highlight">
				<img className="highlight-image" src={imageURL} alt={name} />
				<figcaption className="highlight-caption">{name}</figcaption>
			</figure>
		</section>
	);
};

export default Highlight;
