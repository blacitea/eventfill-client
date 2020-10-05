import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import './Calendar.scss';

import axios from 'axios';

const Calendar = props => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		console.log('Did this happen?');
		axios.get('/api/events').then(resolve => {
			const eList = resolve.data.all.map(e => {
				console.log('before change start', e.start);
				let startd = moment(e.start).add(1, 'days').toISOString();

				console.log('after changed', startd);

				console.log('before change end', e.end);
				let endd = moment(e.end).add(1, 'days').toISOString();
				console.log('after changed', endd);
				return {
					...e,
					url: `/events/${e.id}`,
					start: startd,
					end: endd,
				};
			});

			setEvents(eList);
		});
	}, []);
	//Control what data to display in grid
	function renderEventContent(eventInfo) {
		console.log(eventInfo);
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
