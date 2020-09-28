import React from 'react';
const Invite = props => {
	return (
		<form onSubmit={props.onSubmit}>
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
				<select>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
			</label>
			<label>
				Message (Optional)
				<textarea placeholder="Send them a personal note for faster response!" />
			</label>
			<input type="submit" value="Send Invite" />
		</form>
	);
};

export default Invite;
