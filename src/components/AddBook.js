const AddBook = () => (
  <section id="addBook">
    <h2>ADD NEW BOOK</h2>
    <form>
      <br />
      <input type="text" id="addBook" name="addBook" placeholder="new book" />
      <input type="text" id="addBookAuthor" name="addBookAuthor" placeholder="author" />
      <select name="category" id="category">
        <option value="Drama" selected>Drama</option>
        <option value="Economy" selected>Economy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Action">Action</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  </section>
);

export default AddBook;
