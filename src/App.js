import './App.scss';
import RouteApp from './RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav-bar/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <RouteApp />
      </div>
    </Router>
  );
}

export default App;
