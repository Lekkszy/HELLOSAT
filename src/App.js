import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import CardComp from './components/CardComp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello World</h1>
      <CardComp/>
    </div>
  );
}

export default App;
