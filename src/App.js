import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import IndexPage from "./pages/index";
import InvalidPage from "./pages/error";
import Equations from "./pages/equations";
import Forces from "./pages/forces";
import Kinomatics from "./pages/kinomatics";
import Circular from "./pages/circular";
import Gravation from "./pages/gravation";
import Work from "./pages/work";


class App extends React.Component{
  render() {
    return (
      <div style={{backgroundColor: '#1b1c1d', minHeight: "100vh", height: "auto"}}>
      <Router>
        <Switch>
          <Route exact path="/PhysicsCalc" component={IndexPage} />
          <Route exact path="/PhysicsCalc/equations" component={Equations} />
          <Route exact path="/PhysicsCalc/forces" component={Forces} />
          <Route exact path="/PhysicsCalc/kinomatics" component={Kinomatics} />
          <Route exact path="/PhysicsCalc/circular" component={Circular} />
          <Route exact path="/PhysicsCalc/gravation" component={Gravation} />
          <Route exact path="/PhysicsCalc/work" component={Work} />

          <Route exact path="/PhysicsCalc/404" component={InvalidPage} />
          <Redirect to="/PhysicsCalc/404" />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
