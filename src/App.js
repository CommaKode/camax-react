import './scss/_reset.scss';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
// import RouteApp from './RouteApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavMobile from './components/nav-bar/NavMobile';
import ProductsPage from './components/Products/ProductsPage';
import HomePageCar from './components/Carousel/HomePageCar';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
