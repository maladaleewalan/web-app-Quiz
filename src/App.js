import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryPage from "./Components/CategoryPage";
import MainPage from "./Components/MainPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route path="/category">
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
}
