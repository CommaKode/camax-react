import './scss/_reset.scss';
import './App.scss';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
// import RouteApp from './RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteApp from './RouteApp';
import ScrollToTop from './HOC/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <ScrollToTop />
        <RouteApp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
