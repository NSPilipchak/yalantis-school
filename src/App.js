import "./App.css";
import React from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Emploees from "./pages/Emploees";

const App = () => {
  return (
        <Router>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/employees" component={Emploees} />
        </Router>
  );
};

const IndexPage = () => {
  return (
      <h3>Let's go to <Link to="/employees">Emploees</Link></h3>
  );
};

export default App;
