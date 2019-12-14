const { getPosts, createPost } = require('./db/posts');
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

	Mutation: {
		async addPost(_, { input }, { db }) {
			let result = await createPost(db, {
				...input
			});
			//console.log(input);
			console.log(result.ops[0]);
		}
	},

	Post: {
		async op(post, __, { db }) {
			let user = await getUser(db, post.op);
			return user;
		}
	}

}
