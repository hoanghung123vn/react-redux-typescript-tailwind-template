import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

const Loader = () => (
  <div className="p-4 text-center">
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Layout>
    </Suspense>
  );
}

export default App;
