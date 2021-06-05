import './App.scss';
import RouteApp from './RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMobile from './components/nav-bar/NavMobile';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMobile />
        <RouteApp />
      </div>
    </Router>
  );
}

export default App;
