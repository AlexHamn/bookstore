import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <header>
        <h1>Bookstore CMS</h1>
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
  );
};

export default App;