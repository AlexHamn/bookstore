import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    title, category, author, progress, currentChapter, id,
  } = props;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <article className="book">
      <div className="bookLeft">
        <div className="bookData">
          <p className="category">{category}</p>
          <h3>{title}</h3>
          <p className="author">{author}</p>
        </div>
        <div className="bookActions">
          <button type="button">Comments</button>
          <button type="button" onClick={removeHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="bookCenter">
        <div className="Oval-2" />
        <div>
          <p className="percentage">
            {progress}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="bookRight">
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  category: 'Drama',
  progress: 50,
  currentChapter: 'Testing',
};

export default Book;
