import React from 'react';
import moment from 'moment';

const UserAttendings = ({ attending }) => {
	return (
		<article>
			<h3>Attending events</h3>
			{attending &&
				attending.map(attend => {
					return (
						<article>
							<p>{attend.name}</p>
							<p>
								Event period: {moment(attend.start).format('LL')} to{' '}
								{moment(attend.end).format('LL')}
							</p>
						</article>
					);
				})}
		</article>
	);
};

export default UserAttendings;
