const MongoDB = require('./db');

const getUser = async (db, id) => {
    try {
        const users = db.collection("users");
        const results = await users.findOne({ _id: id });
        return results;
    } catch (e) {
        throw e;
    }
}

module.exports = { getUser };
