import React from "react";
import Login from "./components/login/Login";
import styles from "./components/css/App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/Maker";

const App = ({ FileInput, authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService}></Maker>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
