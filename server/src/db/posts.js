const { ObjectID } = require('mongodb');

const getPosts = async (db) => {
    try {
        const posts = db.collection("posts");
        const results = await posts.find().toArray();
        return results;
    } catch (e) {
        throw e;
    }
}

const createPost = async (db, post) => {
    try {
        const posts = db.collection("posts");
        const results = await posts.insertOne(
            {
                title: post.title,
                description: post.description,
                link: post.link,
                op: ObjectID("5df12a6f12cd8b9b0f2b9ce7"),
                subreddit: ObjectID("5df1305c12cd8b9b0f2b9ce8"),
                votes: 0,
                comments: []
            }
        )
        return results;
    } catch (e) {
        throw e;
    }
}

module.exports = { getPosts, createPost };