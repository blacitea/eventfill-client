import React from 'react';
import Preview from './Preview';
import { Link } from 'react-router-dom';
import './PreviewsList.scss';

const PreviewsList = ({ array, title, message, resource }) => {
	return (
		<section className="previewslist">
			<h2 className="previewsList-title">{title}</h2>
			<h4 className="previewsList-message">{message}</h4>
			<ul className="previewsList-list">
				{array.map(item => (
					<Link to={`/${resource}/${item.id}`}>
						<Preview
							key={item.id}
							name={item.name}
							image_url={item.image_url}
							description={item.description}
							url={item.url}
						/>
					</Link>
				))}
			</ul>
		</section>
	);
};

export default PreviewsList;
