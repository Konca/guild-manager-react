import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import RaidBuilder from "./pages/RaidBuilder";

function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/RaidBuilder">
        <RaidBuilder />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Fragment>
  );
}

export default App;
