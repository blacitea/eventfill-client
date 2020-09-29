import React from 'react';
import Highlight from './Highlight';
import './HighlightsList.scss';

const HighlightsList = props => {
	return (
		<section className="highlightslist">
			<h2>{props.title}</h2>
			<ul className="highlightslist-list">
				{props.array.map(item => {
					return (
						<Highlight
							name={item.name}
							imageURL={item.image_url}
							onClick={props.onClick}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default HighlightsList;
