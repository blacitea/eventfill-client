import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.scss';

import axios from 'axios';

const Calendar = props => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		console.log('Did this happen?');
		axios.get('/api/events').then(resolve => {
			const eList = resolve.data.all.map(e => ({
				...e,
				url: `/events/${e.id}`,
			}));

			setEvents(eList);
		});
	}, []);
	//Control what data to display in grid
	function renderEventContent(eventInfo) {
		return (
			<article className="calendar-grid">
				<p>{eventInfo.event.extendedProps.name}</p>
				<img
					className="calendar-grid-thumbnail"
					src={eventInfo.event.extendedProps.image_url}
					alt="event thumbnail"
				/>
			</article>
		);
	}

	return (
		<section className="calendar">
			<FullCalendar
				height="auto"
				// contentHeight="100"
				// width to height ration (https://fullcalendar.io/docs/aspectRatio)
				aspectRatio="1"
				// eventBackgroundColor="#C4EADB"
				// eventColor="#C4EADB"
				eventColor="#A8CBE1"
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				initialEvents={[]}
				events={events}
				// eventClick={props.onClick}
				eventContent={renderEventContent}
				// setup (https://fullcalendar.io/docs/headerToolbar)
				headerToolbar={{
					start: 'prev,next',
					center: 'title',
					end: 'today', //`${props.buttonName || 'customs'}`,
				}}
				// setup (https://fullcalendar.io/docs/customButtons)
				customButtons={{
					customs: {
						text: 'Customs button',
						click: () => alert('You clicked a customs button!'),
					},
					// enable overwrite from props
					...props.customButtons,
				}}
				// customButtons={props.customButtons}
			/>
		</section>
	);
};

export default Calendar;
