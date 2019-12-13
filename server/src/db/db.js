const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const url = process.env.DB_URL;
// console.log(url);

// const getUsers = function(db, callback) {
// 	const collection = db.collection('users');
// 	collection.find({}).toArray(function(err, docs) {
// 		console.log("Found this: ");
// 		console.log(docs);
// 		callback(docs);
// 	});
// }

let _db

const connectDB = async (callback) => {
	try {
		MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
			_db = client.db();
			return callback(err)
		})
	} catch (e) {
		throw e
	}
}

const getDB = () => _db
const disconnectDB = () => _db.close()

module.exports = { connectDB, getDB, disconnectDB }