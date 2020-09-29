import React from 'react';

const SelectField = props => {
	return (
		<select value={props.value} onChange={props.onChange}>
			{props.options.map(option => {
				return <option value={option.name}>{option.name}</option>;
			})}
		</select>
	);
};

export default SelectField;
