import React from 'react';
import Highlight from './Highlight';
import './HighlightsList.scss';
import { Link } from 'react-router-dom';

const HighlightsList = ({ title, array, resource }) => {
	return (
		<section className="highlightslist">
			<h2>{title}</h2>
			<ul className="highlightslist-list">
				{array.map(item => {
					return (
						<Link to={`/${resource}/${item.id}`} key={item.id}>
							<Highlight name={item.name} imageURL={item.image_url} />
						</Link>
					);
				})}
			</ul>
		</section>
	);
};

export default HighlightsList;
