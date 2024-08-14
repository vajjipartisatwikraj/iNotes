const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/iNoteBook';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected Successfully");
    } catch (err) {
        console.error("Connection Error:", err);
    }
}

module.exports = connectToMongo;
