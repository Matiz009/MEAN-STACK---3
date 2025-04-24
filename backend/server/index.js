const _ = require("underscore");
const res = _.contains([1, 5, 7, 9], 9);
const express = require("express");

const app = express();

app.use(express.json()); //middleware

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//end point to get all the books

app.get("/books", (req, res) => {
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  res.json(books);
});

//end point to get a book by id

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  const book = books.find((book) => book.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

//end point to create a book

app.post("/create-book", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const newBook = {
    id: Date.now(),
    title,
    author,
  };
  res.status(201).json(newBook);
});

//end point to update a book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  const updatedBook = { ...books[bookIndex], title, author };
  res.json(updatedBook);
});

//end point to delete a book

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(bookIndex, 1);
  res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
