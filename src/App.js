import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Learning from "./component/Learning";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/Quiz" component={Quiz} exact>
            <Quiz />
          </Route>
          <Route path="/Learning" component={Learning} exact>
            <Learning />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
