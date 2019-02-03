//Lets you export stuff to be used in another file
exports.getDate = function () {

	const today = new Date();

	const options = {
		weekday: 'long',
		date: 'numeric',
		month: 'long'
	};
// A built in JS method to format date
 	return today.toLocaleDateString("en-US", options);

 	return day
}

exports.getDay = function () {
	const today = new Date();

	const options = {
		weekday: "long"
	};

	return today.toLocaleDateString("en-US", options);
}
console.log(module.exports)