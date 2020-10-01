const getName = (obj, key) => {
	if (key) {
		return obj.find(({ id }) => id === key).name;
	}
};
export default getName;
