const mongoose = require('mongoose');
// Use environment variable or fallback to default
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/iNoteBook';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
    }
}

module.exports = connectToMongo;
