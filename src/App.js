import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import IndexPage from "./pages/index";
import InvalidPage from "./pages/error";
import Equations from "./pages/equations";
import Forces from "./pages/forces";
import Kinematics from "./pages/kinematics";
import Circular from "./pages/circular";
import Gravation from "./pages/gravation";
import Work from "./pages/work";


class App extends React.Component{
  render() {
    return (
      <div style={{backgroundColor: '#1b1c1d', minHeight: "100vh", height: "auto"}}>
      <BrowserRouter basename="/PhysicsCalc">
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/equations" component={Equations} />
          <Route exact path="/forces" component={Forces} />
          <Route exact path="/kinematics" component={Kinomatics} />
          <Route exact path="/circular" component={Circular} />
          <Route exact path="/gravation" component={Gravation} />
          <Route exact path="/work" component={Work} />

          <Route exact path="/404" component={InvalidPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
