const getPosts = require('./db/posts').getPosts;
const { getUser } = require('./db/user');

module.exports = {

	Query: {
		user(_, __, ctx) {
			return {
				id: "@1231",
				username: "mudamuda",
				name: "Rajesh Choonawala"
			}
		},

		async posts(_, __, { db }) {
			let allPosts = await getPosts(db);
			return allPosts;
		}
	},

	Post: {
		async op(post, __, { db }) {
			let user = await getUser(db, post.op);
			return user;
		}
	}

}
