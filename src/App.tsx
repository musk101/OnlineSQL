import React from "react";
import First from "./Pages/First";
import Second from "./Pages/Second";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/editor" component={Second} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
