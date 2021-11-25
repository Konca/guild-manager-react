import NotFound from "./pages/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage";
import RaidBuilder from "./pages/RaidBuilder";
import RaidBuilderNew from "./pages/RaidBuilderNew";
import CSVReadProvider from "./Context/CSVReadProvider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route exact path="/RaidBuilder">
            <NotFound />
          </Route>
          <Route path="/RaidBuilder/:guildId/:raidId">
              <RaidBuilder />
          </Route>
          <Route path="/RaidBuilder/New">
            <CSVReadProvider>
              <RaidBuilderNew />
            </CSVReadProvider>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
