import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.scss';

const Calendar = props => {
	//Control what data to display in grid
	function renderEventContent(eventInfo) {
		return (
			<article className="calendar-grid">
				<p>{eventInfo.event.title}</p>
				{/* <p>{eventInfo.event.extendedProps.description}</p> */}
				<img
					className="calendar-grid-thumbnail"
					src={eventInfo.event.extendedProps.thumbnail}
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
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				initialEvents={props.events}
				eventClick={props.onClick}
				eventContent={renderEventContent}
			/>
		</section>
	);
};

export default Calendar;
