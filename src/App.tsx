import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Applications from "./pages/applications";
import Clusters from "./pages/clusters";
import Workspaces from "./pages/workspaces";

import Header from "./common/header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Switch>
                    <Route path="/clusters">
                        <Clusters />
                    </Route>
                    <Route path="/workspaces">
                        <Workspaces />
                    </Route>
                    <Route path="/applications">
                        <Applications />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
