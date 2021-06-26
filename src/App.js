import './scss/_reset.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// import RouteApp from './RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';
// import NavMobile from './components/nav-bar/NavMobile';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavMobile /> */}
        {/* <RouteApp /> */}
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
