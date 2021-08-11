import './scss/_reset.scss';
import './App.scss';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
// import RouteApp from './RouteApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavMobile from './components/nav-bar/NavMobile';
import ProductPage from './components/Products/ProductPage';
import HomePageCar from './components/Carousel/HomePageCar';
import AboutUs from './components/AboutUs/AboutUs';
import SuggestionCar from './components/Suggestion/SuggestionCar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test1">
          <ProductPage />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Nav />
            <Hero cName="hero-line" />
            <SuggestionCar />
            <HomePageCar cName="car-line" />
            <AboutUs cName="aboutus-line" />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
