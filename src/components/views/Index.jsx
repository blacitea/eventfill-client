import React from 'react';
import PreviewsList from '../PreviewsList';
import HighligthsList from '../HighlightsList';

const Index = props => {
	return (
		<main>
			<section className="index-focus">
				<article>
					<h1>Your Event Starts Here</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						faucibus mi et lobortis euismod. Vivamus pellentesque gravida urna,
						non semper nisi pellentesque in. Nam quis dictum ex. Proin placerat,
						sapien at consequat scelerisque, nulla turpis sagittis leo, ac
						iaculis elit urna vitae lorem.
					</p>
					<button>Start an event!</button>
				</article>
				<aside>
					<img
						src="http://www.manaleak.com/mtguk/files/2016/11/Stoneforge-Mystic-1.jpg"
						alt="main poster"
					/>
				</aside>
			</section>
			<PreviewsList
				title="Upcoming Events Near You"
				message="Check out these events and plan your attendance!"
				array={props.events}
				onClick={props.onClick}
			/>
			<HighligthsList
				title="Our hottest Talent profiles!"
				array={props.talents}
				onClick={props.onClick}
			/>
		</main>
	);
};

export default Index;
