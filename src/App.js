import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./componentes/Global/Layout";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/badges" component={Badges} /> */}
          {/* <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
