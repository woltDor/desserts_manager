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
            <Route exact path="/desserts_manager">
              <CatalogItems />
            </Route>
            <Route exact path="/desserts_manager/cart">
              <ListDesserts />
            </Route>
            <Route exact path="/desserts_manager/stats">
              <PieChart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
