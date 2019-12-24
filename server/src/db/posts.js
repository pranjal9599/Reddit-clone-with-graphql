const { ObjectID } = require('mongodb');

const getPosts = async (db) => {
    try {
        const posts = db.collection("posts");
        const results = await posts.find().sort({ created_at: -1 }).toArray();
        return results;
    } catch (e) {
        throw e;
    }
}

const getPost = async (db, id) => {
    try {
        const posts = db.collection("posts");
        const results = await posts.find({ _id: ObjectID(id) }).toArray();
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
                comments: [],
                created_at: new Date(),
                updated_at: new Date()
            }
        )
        return results;
    } catch (e) {
        throw e;
    }
}

module.exports = { getPosts, createPost, getPost };