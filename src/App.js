import './scss/_reset.scss';
import './App.scss';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
// import RouteApp from './RouteApp';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavMobile from './components/nav-bar/NavMobile';
import ProductsPage from './components/Products/ProductsPage';
import HomePageCar from './components/Carousel/HomePageCar';
import AboutUs from './components/AboutUs/AboutUs';
=======
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteApp from './RouteApp';
>>>>>>> 416aca00c5e52c29a8a555e4625cc11d44b6ae10

function App() {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/test1">
          <ProductsPage />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Nav />
            <Hero />
            <HomePageCar />
            <AboutUs />
            <Footer />
          </div>
        </Route>
=======
        <div className="App">
          <Nav />
          <RouteApp />
          <Footer />
        </div>
>>>>>>> 416aca00c5e52c29a8a555e4625cc11d44b6ae10
      </Switch>
    </Router>
  );
}

export default App;
