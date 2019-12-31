import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Playlist1 from "./components/Playlist1";
import Playlist2 from "./components/Playlist2";
import Home from "./components/Home";
import Nav from "./Nav";
import About from "./components/About";
import Topten from "./components/Topten";
import Resources from "./components/Resources";

export default () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/playlist/2019" component={Playlist1} />
          <Route path="/playlist/2020" component={Playlist2} />
          <Route path="/topten1" component={Topten} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </div>
    </Router>
  );
};
