import NavBar from "./Components/NavBar";
import CatalogItems from "./Components/CatalogItems";
import ListDesserts from "./Components/ListDesserts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PieChart from "./Components/PieChart";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <CatalogItems />
            </Route>
            <Route exact path="/cart">
              <ListDesserts />
            </Route>
            <Route exact path="/stats">
              <PieChart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
