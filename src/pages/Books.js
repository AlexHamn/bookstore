import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const Books = () => (
  <>
    <section id="books">
      <BookList />
    </section>
    <AddBook />
  </>
);

export default Books;
