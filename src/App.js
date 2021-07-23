import "./scss/_reset.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import RouteApp from './RouteApp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavMobile from './components/nav-bar/NavMobile';
import ProductPage from "./components/Products/ProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test1">
          <ProductPage />
        </Route>
        <Route exact path="/">
          <div className="App">
            {/* <NavMobile /> */}
            {/* <RouteApp /> */}
            <NavBar />
            <Hero />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
