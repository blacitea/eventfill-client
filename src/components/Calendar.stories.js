import React from 'react';
import Calendar from './Calendar';
import events from './mockData';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Components/Calendar',
	component: Calendar,
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

const Template = args => <Calendar {...args} />;

export const Empty = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
	events: events,
};

export const AddEvent = props => (
	<Calendar
		events={events}
		onClick={action('clicked')}
		customButtons={{
			customs: {
				text: 'Add an event',
				click: () => alert('You try to add an event!'),
			},
		}}
	></Calendar>
);
