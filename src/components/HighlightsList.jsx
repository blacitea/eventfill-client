import React from 'react';
import Highlight from './Highlight';
import './HighlightsList.scss';

const HighlightsList = props => {
	return (
		<section className="highlightslist">
			<ul className="highlightslist-list">
				{props.array.map(item => {
					return (
            <Highlight
              name={item.name}
              imageURL={item.imageURL}
              onClick={props.onClick}
            />
					);
				})}
			</ul>
		</section>
	);
};

export default HighlightsList;
