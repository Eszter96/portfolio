import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Works from "./components/pages/Works";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
