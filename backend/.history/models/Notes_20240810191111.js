import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true,
        unique : true
    },

    tags : {
        type : {
            type : String,
            required : true
    },

    date : {
        type : {
            type : String,
            required : true
        }
  }
});

module.exports = mongoose.mode1('note', NotesSchema)