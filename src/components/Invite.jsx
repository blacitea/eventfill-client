import React from 'react';
const Invite = props => {
	return (
		<form>
			<img
				className="invite-talent-img"
				src={props.imageURL}
				alt={props.name}
			></img>
			<h3>
				Invite
				<br />
				{props.name}
				<br />
				to your event!
			</h3>
			<input></input>
			<input type="button" value="Send Invite" />
		</form>
	);
};

export default Invite;
