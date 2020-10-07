const getByKey = (obj, key) => {
	let result;

	result = obj.find(({ id }) => parseInt(id) === parseInt(key));

	if (!result) {
		result = { name: null };
	}
	return result;
};
export default getByKey;
