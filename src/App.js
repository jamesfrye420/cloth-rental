import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage/Searchpage";
import AddItems from "./components/AddItems/AddItems";
import ProductScreen from "./Screens/ProductDisplay/ProductScreen";
import ItemDataProvider from "./Store/item-dataProvider";

function App() {
  return (
    <ItemDataProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/product/:id" exact>
            <ProductScreen />
          </Route>
          <Route path="/addData">
            <AddItems />,
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ItemDataProvider>
  );
}

export default App;
