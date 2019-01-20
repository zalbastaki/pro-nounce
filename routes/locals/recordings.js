const keystone = require('keystone');
const Recording = keystone.list('Recording');
const getUser = require('./user');
const getWord = require('./word');

module.exports = async function (req) {
	const [
		user,
		word,
	] = await Promise.all([
		getUser(req),
		getWord(req),
	]);
	if (user) {
		return Recording.model.find({
			user: user._id,
			word: word._id,
		});
	} else {
		return null;
	}
};
