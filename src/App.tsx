import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Cluster from "./models/cluster";

import Applications from "./pages/applications";
import Clusters from "./pages/clusters";
import Workspaces from "./pages/workspaces";

import Header from "./common/header";

function App() {
    const [clusters, setClusters] = useState([] as Cluster[]);

    const onAddCluster = () => {
        let newCluster;

        if (clusters.length === 0) {
            newCluster = new Cluster({
                name: "azure-eastus-1",
                cloud: "azure",
                region: "eastus",
            });
        } else {
            newCluster = new Cluster({
                name: "azure-westus-1",
                cloud: "azure",
                region: "westus",
            });
        }

        const newClusters = clusters.concat([newCluster]);
        setClusters(newClusters);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Switch>
                    <Route path="/clusters">
                        <Clusters
                            clusters={clusters}
                            onAddCluster={onAddCluster}
                        />
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
