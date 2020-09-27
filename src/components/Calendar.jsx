import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.scss';

const Calendar = props => {
	function renderEventContent(eventInfo) {
		return (
			<article>
				<p>{eventInfo.event.title}</p>
				<p>{eventInfo.event.extendedProps.description}</p>
				<img
					className="calendar-grid-thumbnail"
					src={eventInfo.event.extendedProps.thumbnail}
					alt="event thumbnail"
				/>
			</article>
		);
	}
	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			initialView="dayGridMonth"
			initialEvents={props.events}
			eventClick={props.onClick}
			eventContent={renderEventContent}
		/>
	);
};

export default Calendar;
