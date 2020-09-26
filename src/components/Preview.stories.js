import React from 'react';
import Preview from './Preview';

export default {
	title: 'Components/Preview',
	component: Preview,
	argTypes: {
		onClick: {
			action: 'clicked',
		},
	},
};

const Template = args => <Preview {...args} />;

export const EmptyPreview = Template.bind({});
EmptyPreview.args = {
	name: 'Empty',
	description: 'Display block',
	imageURL:
		'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png',
	url: '#',
};

export const EventPreview = Template.bind({});
EventPreview.args = {
	name: 'Event 1',
	description:
		'The perfect event to join on this Oct if you love music as much as we do!',
	imageURL:
		'https://www.tourismsaskatchewan.com/-/media/things-to-do/events/sasktel-centre-concert-events.ashx',
	url: '#',
};
