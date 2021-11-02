import React from 'react';
import PropTypes from 'prop-types';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Book = (props) => {
  const {
    title, category, author, progress, currentChapter,
  } = props;

  return (
    <article className="book">
      <div className="bookLeft">
        <div className="bookData">
          <h3>{title}</h3>
          <p className="author">{author}</p>
          <p className="category">{category}</p>
        </div>
        <div className="bookActions">
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
        </div>
      </div>
      <div className="bookCenter">
        <p>{progress}%</p>
        <p>completed</p>
      </div>
      <div className="bookRight">
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button>UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

export default Book;