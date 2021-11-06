import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const APP_IDENTIFIER = 'lcU94xTflf6F6vmy9vQT';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const newBook = {
    item_id: `${payload.id}`,
    title: `${payload.name}&&&${payload.author}`,
    category: `${payload.category}`,
  };
  await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_IDENTIFIER}/books`, newBook);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  const body = {
    item_id: payload,
  };
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_IDENTIFIER}/books/${payload}`, body);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const loadBooks = () => async (dispatch) => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_IDENTIFIER}/books`);
  const array = [];
  const keys = Object.keys(response.data);
  const values = Object.values(response.data);
  values.forEach((value, index) => {
    const obj = value[0];
    const splitArray = obj.title.split('&&&');
    const book = {
      name: splitArray[0],
      author: splitArray[1],
      id: keys[index],
    };
    array.push(book);
  });
  dispatch({
    type: LOAD_BOOKS,
    payload: array,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case LOAD_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
