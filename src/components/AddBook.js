const AddBook = () => (
  <section id="addBook">
    <form>
      <label htmlFor="addBook">ADD NEW BOOK</label>
      <br />
      <input type="text" id="addBook" name="addBook" placeholder="new book" />
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
