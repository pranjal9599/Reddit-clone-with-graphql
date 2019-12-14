const { ObjectID } = require('mongodb');

const getSubreddits = async (db) => {
    try {
        const subredditsDoc = db.collection('subreddits');
        const subreddits = await subredditsDoc.find().toArray();
        return subreddits;
    }
    catch (e) {
        throw e;
    }
}


module.exports = {
    getSubreddits
}