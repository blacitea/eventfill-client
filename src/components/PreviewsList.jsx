import React from 'react';
import Preview from './Preview';

const PreviewsList = ({ array, title }) => {
	return (
		<section className="previewslist">
			<h2 className="previewsList-title">{title}</h2>
			<ul className="previewsList-list">
				{array.map(item => (
					<Preview
						name={item.name}
						imageURL={item.imageURL}
						description={item.description}
						url={item.url}
					/>
				))}
			</ul>
		</section>
	);
};

export default PreviewsList;
