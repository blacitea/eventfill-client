const getByKey = (obj, key) => {
	let result = {};
	if (key) {
		result = obj.find(({ id }) => parseInt(id) === parseInt(key));
	}
	return result;
};
export default getByKey;
