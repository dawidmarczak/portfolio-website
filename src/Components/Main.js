import React from "react";
import "../Styles/App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
