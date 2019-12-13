const getPosts = async (db) => {
    try {
        const posts = db.collection("posts");
        const results = await posts.find().toArray();
        return results;
    } catch (e) {
        throw e;
    }
}

module.exports = { getPosts };