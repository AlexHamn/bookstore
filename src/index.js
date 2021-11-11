import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';

// async function createBook() {
//   const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await response.text();

//   console.log(data);
// }

// createBook();

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// UIaDgmR95LlI9VSFB6gX
