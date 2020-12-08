import "./App.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Emploees from "./pages/Emploees";

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='/employees' component={Emploees} />
    </Switch>
  </div>
);

const IndexPage = () => {
  return (
    <h3>
      Let's go to <Link to='/employees'>Emploees</Link>
    </h3>
  );
};

export default App;
