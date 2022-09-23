import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Create } from "./Pages/Create";
import { Event } from "./Pages/Event";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/event" component={Event} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
