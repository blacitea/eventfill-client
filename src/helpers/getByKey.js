const getByKey = (obj, key) => {
	let result;
	console.log(key);

	result = obj.find(({ id }) => parseInt(id) === parseInt(key));

	if (!result) {
		result = { name: null };
	}
	return result;
};
export default getByKey;
