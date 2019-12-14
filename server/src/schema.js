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
		link: String!
		description: String
		subreddit: String!
		op: User
		votes: Int!
	}

	input NewPostInput {
		title: String!
		link: String!
		subreddit: String!
		description: String	
	}

	type Query {
		user: User!
		posts: [Post]
	}

	type Mutation {
		addPost(input: NewPostInput!): Post!
	}


`;

module.exports = typeDefs
