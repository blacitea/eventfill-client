const getByKey = (obj, key) => {
	if (key) {
		return obj.find(({ id }) => id === key);
	} else {
		return {};
	}
};
export default getByKey;
