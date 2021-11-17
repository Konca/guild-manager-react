import NotFound from "./pages/NotFound";
import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import RaidBuilder from "./pages/RaidBuilder";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/RaidBuilder">
            <RaidBuilder />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
