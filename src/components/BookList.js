import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <ul id="bookList">
      {books.map((book) => (
        <li className="book" key={book.id}>
          <Book
            title={book.title}
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
