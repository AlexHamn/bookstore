import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.addBook.value,
      author: e.target.addBookAuthor.value,
      category: 'tst',
      progress: 33,
      currentChapter: 'tsting',
    };
    e.target.reset();

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <section id="addBook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" id="addBook" name="addBook" placeholder="new book" />
        <input type="text" id="addBookAuthor" name="addBookAuthor" placeholder="author" />
        <select name="category" id="category" disabled>
          <option value="Drama">Drama</option>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
