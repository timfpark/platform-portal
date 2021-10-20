import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "./App.css";

import Application from "./models/application";
import Cluster from "./models/cluster";
import Workspace from "./models/workspace";

import Workspaces from "./pages/workspaces";
import Clusters from "./pages/clusters";

import Header from "./common/header";

function App() {
    const azureEastUS1 = new Cluster({
        id: "azure-eastus-1",
        name: "azure-eastus-1",
        cloud: "azure",
        region: "eastus",
    });

    const azureWestUS1 = new Cluster({
        id: "azure-westus-1",
        name: "azure-westus-1",
        cloud: "azure",
        region: "westus",
    });

    const initialClusters = [azureEastUS1, azureWestUS1];

    const riskModelingApi = new Application({
        id: "risk-modeling-api",
        name: "Risk Modeling API",
        clusters: [azureEastUS1, azureWestUS1],
        status: "green",
    });

    const riskModelingWebapp = new Application({
        id: "risk-modeling-webapp",
        name: "Risk Modeling WebApp",
        clusters: [azureEastUS1, azureWestUS1],
        status: "green",
    });

    const riskModeling = new Workspace({
        id: "risk-modeling",
        name: "Risk Modeling",
        applications: [riskModelingApi, riskModelingWebapp],
    });

    const emptyForeignExchangeWorkspace = new Workspace({
        id: "foreign-exchange",
        name: "Foreign Exchange",
        applications: [],
    });

    const forexApi = new Application({
        id: "foreign-exchange-api",
        name: "Foreign Exchange API",
        clusters: [azureEastUS1],
        status: "coral",
    });

    const initialWorkspaces = [
        riskModeling,
        emptyForeignExchangeWorkspace,
    ] as Workspace[];

    const [clusters, setClusters] = useState(initialClusters);
    const [workspaces, setWorkspaces] = useState(initialWorkspaces);

    const onAddCluster = () => {
        if (clusters.length !== 2) {
            return;
        }

        let newCluster = new Cluster({
            id: "azure-westus-2",
            name: "azure-westus-2",
            cloud: "azure",
            region: "westus",
        });

        const newClusters = clusters.concat([newCluster]);
        setClusters(newClusters);
    };

    const onAddApplication = (workspace: Workspace) => {
        if (workspaces[1].applications.length === 0) {
            const fullForeignExchangeWorkspace = new Workspace({
                id: "foreign-exchange",
                name: "Foreign Exchange",
                applications: [forexApi],
            });

            setWorkspaces([riskModeling, fullForeignExchangeWorkspace]);

            setTimeout(() => {
                forexApi.status = "green";

                const fullForeignExchangeWorkspace = new Workspace({
                    id: "foreign-exchange",
                    name: "Foreign Exchange",
                    applications: [forexApi],
                });

                setWorkspaces([riskModeling, fullForeignExchangeWorkspace]);
            }, 30000);
        }
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
                        <Workspaces
                            workspaces={workspaces}
                            onAddApplication={onAddApplication}
                        />
                    </Route>

                    <Redirect to="/workspaces" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
