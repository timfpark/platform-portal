import Cluster from "./cluster";
import Workspace from "./workspace";

interface IApplicationParams {
    id: string;
    name: string;
    workspace: Workspace;
    clusters: Cluster[];
}

class Application {
    id: string;
    name: string;
    workspace: Workspace;
    clusters: Cluster[];

    constructor(params: IApplicationParams) {
        this.id = params.id;
        this.name = params.name;
        this.workspace = params.workspace;
        this.clusters = params.clusters;
    }
}

export default Application;
