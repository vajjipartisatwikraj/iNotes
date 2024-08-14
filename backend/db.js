const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://satwikrajv:Satwikraj%401213@cluster0.nhlqv.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected Successfully");
    } catch (err) {
        console.error("Connection Error:", err);
    }
}

module.exports = connectToMongo;
