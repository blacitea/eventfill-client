import React, { useState } from 'react';

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
		alert(`Form submited with ${textValue} and ${selectValue}`);
		setTextValue('');
		setSelectValue('');
	};

	return (
		<form onSubmit={formSubmit}>
			<img
				className="invite-talent-img"
				src={props.talent.imageURL}
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
				<select value={selectValue} onChange={changeSelect}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
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
