import React from 'react';
import HighlightsList from './HighlightsList';

export default {
	title: 'Components/Highlights List',
	component: HighlightsList,
	argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <HighlightsList {...args} />;

export const TalentHighligths = Template.bind({});
TalentHighligths.args = {
	title: 'Our hottest talents profiles!',
	array: [
		{
			id: 1,
			name: 'Nicol Bolas',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNMSYTAILIUcNLVGZ7JNz4xt96spL4zpv3nQ&usqp=CAU',
		},
		{
			id: 2,
			name: 'Nahiri',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgy3Wp1EbrYefjQnpJ3w9RWkVe3P-bQsepDA&usqp=CAU',
		},
		{
			id: 3,
			name: 'Liliana',
			image_url: 'https://i.imgur.com/TRrV9e6.jpg',
		},
		{
			id: 4,
			name: 'Nissa',
			image_url: 'https://i.imgur.com/59LE47m.jpg',
		},
		{
			id: 5,
			name: 'Jace',
			image_url: 'https://i.imgur.com/kCv2rRe.jpg',
		},
	],
};
