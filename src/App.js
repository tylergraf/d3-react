import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import D3 from "./D3";
import D3React from "./D3React";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/d3">d3</Link>
        <Link to="/d3-react">d3 React</Link>

        <Route exact path="/" component={Home}></Route>
        <Route path="/d3" component={D3}></Route>
        <Route path="/d3-react" component={D3React}></Route>
      </Router>
    </>
  );
}

export default App;
