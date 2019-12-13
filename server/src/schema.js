const { gql } = require('apollo-server');

const typeDefs = gql`

	type User {
		_id: String!
		name: String!
		username: String!
		display_picture: String!
	}

	type Post {
		_id: String!
		title: String!
		description: String
		subreddit: String!
		op: User
		votes: Int!
	}


	type Query {
		user: User!
		posts: [Post]
	}


`;

module.exports = typeDefs
