const { getPosts, createPost, getPost } = require('./db/posts');
const { getUser } = require('./db/user');
const { getSubreddits } = require('./db/subreddits');
const { getComments, getCommentsCount } = require('./db/comments');

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
		},

		async subreddits(_, __, { db }) {
			let subreddits = await getSubreddits(db);
			return subreddits;
		},

		async post(_, { id }, { db }) {
			let post = await getPost(db, id);
			//console.log(post);
			return post[0];
		}

	},

	Mutation: {
		async addPost(_, { input }, { db }) {
			let result = await createPost(db, {
				...input
			});
			return result.ops[0];
		}
	},

	Post: {
		async op(post, __, { db }) {
			let user = await getUser(db, post.op);
			return user;
		},
		async comments(post, __, { db }) {
			let comments = await getComments(db, post._id);
			return comments;
		},
		async commentCount(post, __, { db }) {
			let noComments = await getCommentsCount(db, post._id);
			//console.log(noComments);
			return noComments;
		}
	},

	Comment: {
		async user(comment, __, { db }) {
			let user = await getUser(db, comment.userId);
			return user;
		}
	}


}
