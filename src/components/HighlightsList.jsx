import React from 'react';
import './HighlightsList.scss';

const HighlightsList = props => {
	return (
		<section className="highlightslist">
			<h5 className="highlightslist-title">{props.title}</h5>
			<ul className="highlightslist-list">
				{props.array.map(item => {
					return (
						<figure onClick={props.onClick} key={item.id}>
							<img
								className="highlightslist-image"
								src={item.imageURL}
								alt={item.name}
							/>
							<figcaption className="highlightslist-cap">
								{item.name}
							</figcaption>
						</figure>
					);
				})}
			</ul>
		</section>
	);
};

export default HighlightsList;
