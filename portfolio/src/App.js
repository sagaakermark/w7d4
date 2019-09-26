import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Projects } from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";
const NotFound = () => {
  return <div>Page not found</div>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* Switch renders the first child that matches the path */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
