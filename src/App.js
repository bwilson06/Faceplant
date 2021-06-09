import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from './pages/Splash'
import Home from './pages/Home'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Splash} />
        <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
