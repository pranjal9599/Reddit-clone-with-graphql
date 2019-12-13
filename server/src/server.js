const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const MongoDB = require('./db/db');
const getPosts = require('./db/posts').getPosts;

let db;

MongoDB.connectDB(async (err) => {
	if (err) throw err;
	db = MongoDB.getDB();
	//console.log(db);
})




const server = new ApolloServer({
	typeDefs,
	resolvers,
	context() {
		return { db };
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready on ${url}`);
});

