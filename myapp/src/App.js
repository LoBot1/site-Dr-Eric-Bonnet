import Home from "./pages/Home";
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TraveTo from "./pages/TraveTo";
import NavBar from "./components/navbar";
import Error from "./pages/Error404";
import EricBonnet from "./pages/EricBonnet";
import PhillipeEdouartBiron from "./pages/PhillipeEdouardBiron";
import Map from "./pages/MapNoustrouver";
import Footer from "./components/footer";

//App.js
function App(props){
  return <Router>
      <Switch>
      <Route exact path="1">
          <PhillipeEdouartBiron/>
        </Route>
        <Route path="/Home"> 
          <Home /> 
        </Route>
        <Route path="/NousRetrouver"> 
          <TraveTo /> 
        </Route>
        <Route exact path="/EricBonnet">
          <EricBonnet/>
        </Route>
        <Route exact path="/PhillipeEdouardBiron">
          <PhillipeEdouartBiron/>
        </Route>
        <Route exact path="/map">
          <Map/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Switch>
  </Router>
}
export default App;