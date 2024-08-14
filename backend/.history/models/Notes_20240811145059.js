const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true // Be cautious with `unique` constraints if you're allowing multiple notes with the same description.
    },
    tag: {
        type: String,
        default: 'general'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Ensure this references your User model
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema); // Use 'Note' instead of 'Notes'
