import React from 'react';
import Preview from './Preview';
import './PreviewsList.scss';

const PreviewsList = ({ array, title, onClick }) => {
	return (
		<section className="previewslist">
			<h2 className="previewsList-title">{title}</h2>
			<ul className="previewsList-list">
				{array.map(item => (
					<Preview
						onClick={onClick}
						key={item.id}
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
