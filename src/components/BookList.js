import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBooks } from '../redux/books/books';
import Book from './Book';

const List = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <ul id="bookList">
      {books.map((book) => (
        <li key={book.id}>
          <Book
            title={book.name}
            category={book.category}
            author={book.author}
            progress={book.progress}
            currentChapter={book.currentChapter}
            id={book.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
