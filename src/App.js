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
          <Route exact path={process.env.PUBLIC_URL + "/"} component={IndexPage} />
          <Route exact path={process.env.PUBLIC_URL + "/equations"} component={Equations} />
          <Route exact path={process.env.PUBLIC_URL + "/forces"} component={Forces} />
          <Route exact path={process.env.PUBLIC_URL + "/kinomatics"} component={Kinomatics} />
          <Route exact path={process.env.PUBLIC_URL + "/circular"} component={Circular} />
          <Route exact path={process.env.PUBLIC_URL + "/gravation"} component={Gravation} />
          <Route exact path={process.env.PUBLIC_URL + "/work"} component={Work} />

          <Route exact path={process.env.PUBLIC_URL + "/404"} component={InvalidPage} />
          <Redirect to={process.env.PUBLIC_URL + "/404"} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
