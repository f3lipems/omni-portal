import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <header>
      <h1>Omni Portal</h1>
      <Menu />
      </header>
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
