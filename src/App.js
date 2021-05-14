import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css"


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path={"/react_portfolio/"} component={Home} />
          <Route exact path={"/react_portfolio/home"} component={Home} />
          <Route exact path={"/react_portfolio/projects"} component={Projects} />
          <Route exact path={"/react_portfolio/contact"} component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
