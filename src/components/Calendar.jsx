import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.scss';

import axios from 'axios';

const Calendar = props => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		axios.get('/api/events').then(resolve => {
			const eList = resolve.data.map(e => {
				return {
					...e,
					url: `/events/${e.id}`,
				};
			});

			setEvents(eList);
		});
	}, []);
	//Control what data to display in grid
	function renderEventContent(eventInfo) {
		return (
			<article className="calendar-grid">
				<span className ="calendar-tooltip">{eventInfo.event.extendedProps.name}</span>
				<img
					className="calendar-grid-thumbnail"
					src={eventInfo.event.extendedProps.image_url}
					alt={eventInfo.event.extendedProps.name}
				/>
			</article>
		);
	}

	return (
		<section className="calendar">
			<FullCalendar
				height="auto"
				aspectRatio="1"
				eventColor="#A8CBE1"
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				initialEvents={[]}
				events={events}
				eventContent={renderEventContent}
				headerToolbar={{
					start: 'prev,next',
					center: 'title',
					end: 'today'
				}}
				customButtons={{
					customs: {
						text: 'Customs button',
						click: () => alert('You clicked a customs button!'),
					},
					...props.customButtons,
				}}
			/>
		</section>
	);
};

export default Calendar;
