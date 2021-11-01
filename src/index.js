import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/Books">
          <Books />
        </Route>
        <Route exact path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);