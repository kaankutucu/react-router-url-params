import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";


function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
            <Route path="/about" exact={Home}>
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/User">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
