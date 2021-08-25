import './App.css';
import {Router} from '@reach/router';
import Home from "./components/Home";
import About from "./components/About";
import Designer from "./components/Designer";

function App() {
  return (
    <div className="App">
      <Router>
        <Home default path = "." />
        <About path = "/About" />
        <Designer path = "/Designer" />
      </Router>
    </div>
  );
}

export default App;
