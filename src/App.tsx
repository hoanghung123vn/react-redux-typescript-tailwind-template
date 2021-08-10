import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Layout>
  );
}

export default App;
