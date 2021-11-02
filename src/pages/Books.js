import React from 'react';
import BookList from '../components/BookList'

const Books = () => {
  return (
    <>
      <section>
        <h1>Bookstore CMS</h1>
        <BookList />
      </section>
      <section id="addBook">
        <form>
          <label for="addBook">ADD NEW BOOK</label><br/>
          <input type="text" id="addBook" name="addBook" placeholder="new book"></input>
          <select name="category" id="category">
            <option value = "Drama" selected>Drama</option>
            <option value = "Economy" selected>Economy</option>
            <option value = "Science Fiction">Science Fiction</option>
            <option value = "Action">Action</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    </>
  );
};

export default Books;