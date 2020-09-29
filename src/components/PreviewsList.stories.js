import React from 'react';
import PreviewsList from './PreviewsList';

export default {
	title: 'Components/PreviewsList',
	component: PreviewsList,
	argTypes: { onClick: { action: 'clicked' } },
};

const event = [
	{
		name: 'Event 1',
		id: 1,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://www.tourismsaskatchewan.com/-/media/things-to-do/events/sasktel-centre-concert-events.ashx',
		url: '#',
	},
	{
		name: 'Event 2',
		id: 2,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdIwF9ekDWQOzjwDqNwr7woYHVFjf_twc0FA&usqp=CAU',
		url: '#',
	},
	{
		name: 'Event 3',
		id: 3,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJc8NQqwyAyK6DMH27BiqdxvVIjmue3XoHyQ&usqp=CAU',
		url: '#',
	},
	{
		name: 'Event 4',
		id: 4,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://www.tourismsaskatchewan.com/-/media/things-to-do/events/sasktel-centre-concert-events.ashx',
		url: '#',
	},
	{
		name: 'Event 5',
		id: 5,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdIwF9ekDWQOzjwDqNwr7woYHVFjf_twc0FA&usqp=CAU',
		url: '#',
	},
	{
		name: 'Event 6',
		id: 6,
		description:
			'The perfect event to join on this Oct if you love music as much as we do!',
		image_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJc8NQqwyAyK6DMH27BiqdxvVIjmue3XoHyQ&usqp=CAU',
		url: '#',
	},
];

const Template = args => <PreviewsList {...args} />;

export const EventList = Template.bind({});
EventList.args = {
	title: 'Event of the month',
	array: event,
};
