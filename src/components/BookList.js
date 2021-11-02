import React from 'react';
import Book from './Book';

const List = () => {
  const books = [
    {
      id: 1,
      title: 'Book1',
      category: 'category1',
      author: 'Author 1',
      progress: 0,
      currentChapter: 'Intro',
    },
    {
      id: 2,
      title: 'Book2',
      category: 'category2',
      author: 'Author 2',
      progress: 0,
      currentChapter: 'Some Chapter',
    },
  ];
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
          />
        </li>
      ))}
    </ul>
  );
};

export default List;