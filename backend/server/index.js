const _ = require("underscore");
const res = _.contains([1, 5, 7, 9], 9);
const express = require("express");
const mongoose = require("mongoose");
const book = require("./model/book"); // Import the book model

const app = express();

app.use(express.json()); //middleware

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//end point to get all the books

app.get("/books", async (req, res) => {
  const books = await book.find({});
  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }
  res.json(books);
});

//end point to get a book by id

app.get("/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const book = await book.findOne({ id });
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

//end point to create a book

app.post("/create-book", async (req, res) => {
  const { title, author, publishedDate, Code, description } = req.body;
  if (!title || !author || !Code || !description) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const newBook = await book.create({
    title,
    author,
    publishedDate,
    Code,
    description,
  });
  res.status(201).json(newBook);
});

//end point to update a book
app.put("/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, publishedDate, Code, description } = req.body;
  const bookToUpdate = await book.findByIdAndUpdate(
    id,
    {
      title,
      author,
      publishedDate,
      Code,
      description,
    },
    { new: true }
  );
  if (!bookToUpdate) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(bookToUpdate);
});

//end point to delete a book

app.delete("/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const bookToDelete = await book.findByIdAndDelete(id);
  if (!bookToDelete) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
