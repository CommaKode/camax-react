import './scss/_reset.scss';
import './App.scss';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
// import RouteApp from './RouteApp';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteApp from './RouteApp';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <RouteApp />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
