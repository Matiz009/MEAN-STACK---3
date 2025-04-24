const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  Code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
