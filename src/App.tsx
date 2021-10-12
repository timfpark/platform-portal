import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "./App.css";

import Cluster from "./models/cluster";
import Workspace from "./models/workspace";

import Applications from "./pages/applications";
import Clusters from "./pages/clusters";
import Workspaces from "./pages/workspaces";

import Header from "./common/header";
import Application from "./models/application";

function App() {
    const workspace = new Workspace({
        id: "risk-modeling",
        name: "Risk Modeling",
    });

    const [applications, setApplications] = useState([] as Application[]);
    const [clusters, setClusters] = useState([] as Cluster[]);
    const [workspaces, setWorkspaces] = useState([workspace] as Workspace[]);

    useEffect(() => {
        console.log("new page load");
    }, []);

    const onAddCluster = () => {
        let newCluster;

        if (clusters.length === 0) {
            newCluster = new Cluster({
                id: "azure-eastus-1",
                name: "azure-eastus-1",
                cloud: "azure",
                region: "eastus",
            });
        } else {
            newCluster = new Cluster({
                id: "azure-westus-1",
                name: "azure-westus-1",
                cloud: "azure",
                region: "westus",
            });
        }

        const newClusters = clusters.concat([newCluster]);
        setClusters(newClusters);
    };

    const onAddApplication = () => {
        let newApplication;

        if (applications.length === 0) {
            newApplication = new Application({
                id: "api",
                name: "Risk Modeling API",
                workspace,
                clusters,
            });
        } else {
            newApplication = new Application({
                id: "webapp",
                name: "Risk Modeling Web Application",
                workspace,
                clusters,
            });
        }

        const newApplications = applications.concat([newApplication]);
        setApplications(newApplications);
    };

    return (
        <BrowserRouter basename="/" forceRefresh={false}>
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
                        <Workspaces workspaces={workspaces} />
                    </Route>
                    <Route path="/applications">
                        <Applications
                            applications={applications}
                            onAddApplication={onAddApplication}
                        />
                    </Route>

                    <Redirect to="/clusters" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
