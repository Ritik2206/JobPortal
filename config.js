//const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/job-portal");
const mongoose = require('mongoose');
async function mongoConnect(url) {
    try {
        await mongoose.connect(url);
        console.log("Connection Successful...");
    } catch (err) {
        console.error(err);
        throw new Error("MongoDB connection error");
    }
}
module.exports = mongoConnect;