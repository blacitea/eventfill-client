import React, { useState } from 'react';
import SelectField from './SelectField';

const Invite = props => {
	const [textValue, setTextValue] = useState('');
	const [selectValue, setSelectValue] = useState('');

	const changeText = event => {
		setTextValue(event.target.value);
	};

	const changeSelect = event => {
		setSelectValue(event.target.value);
	};
	const formSubmit = event => {
		event.preventDefault();
		alert(
			`Form submited with ${textValue} and ${selectValue} to user# ${props.talent.user_id}`
		);
		setTextValue('');
		setSelectValue('');
	};

	return (
		<form onSubmit={formSubmit}>
			<img
				className="invite-talent-img"
				src={props.talent.image_url}
				alt={props.talent.name}
			></img>
			<h3>
				Invite
				<br />
				{props.talent.name}
				<br />
				to your event!
			</h3>
			<label>
				Select an event
				<SelectField
					value={selectValue}
					onChange={changeSelect}
					options={props.options}
				/>
			</label>
			<label>
				Message (Optional)
				<textarea
					placeholder="Send them a personal note for faster response!"
					value={textValue}
					onChange={changeText}
				/>
			</label>
			<input type="submit" value="Send Invite" />
		</form>
	);
};

export default Invite;