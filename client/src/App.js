import './App.css';
import {Router} from '@reach/router';
import Home from "./components/Home";
import About from "./components/About";
import Designer from "./components/Designer";
import LogReg from './views/LogReg';
import DesignerLoggedIn from './components/DesignerLoggedIn';
import UploadDesign from './components/UploadDesign';

function App() {
  return (
    <div className="App">
      <Router>
        <Home default path="." />
        <About path = "/About" />
        <Designer path="/Designer" />
        <LogReg path="/logreg" />
        <DesignerLoggedIn path="/loggedin/ByUserID" />
        <UploadDesign path="/uploaddesign"/>
      </Router>
    </div>
  );
}

export default App;
