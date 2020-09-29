import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.scss';

const Calendar = props => {
	//Control what data to display in grid
	function renderEventContent(eventInfo) {
		return (
			<article className="calendar-grid">
				<p>{eventInfo.event.name}</p>
				{/* <p>{eventInfo.event.extendedProps.description}</p> */}
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
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				initialEvents={props.events}
				eventClick={props.onClick}
				eventContent={renderEventContent}
				// setup (https://fullcalendar.io/docs/headerToolbar)
				headerToolbar={{
					start: 'prev,next today',
					center: 'title',
					end: `${props.buttonName || 'customs'}`,
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
