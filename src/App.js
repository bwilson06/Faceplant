import logo from './logo.svg';
import Progress from './components/Progress'
import Logo from './components/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
        <h1 style={{fontFamily: "Poppins", letterSpacing: "6px", padding: "2px"}}>Faceplant</h1>
        <div style={{width: "40%", padding: "10px"}}>
        <Progress />
        </div>
      </header>
    </div>
  );
}

export default App;
