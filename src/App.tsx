import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {Welcome} from "./pages/splash-page/SplashPage";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Welcome</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/users">Users</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
              {/*    <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/users">
                      <Users />
                  </Route>*/}
                  <Route path="/">
                      <Welcome />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
