const { ObjectID } = require('mongodb');

const getComments = async (db, postId) => {
    try {
        const comments = db.collection("comments");
        const results = await comments.find({ postId: ObjectID(postId) }).toArray();
        return results;
    } catch (e) {
        throw e;
    }
}

const getCommentsCount = async (db, postId) => {
    try {
        const comments = db.collection("comments");
        const results = await comments.find({ postId: ObjectID(postId) }).count();
        return results;
    } catch (e) {
        throw e;
    }
}

module.exports = { getComments, getCommentsCount }