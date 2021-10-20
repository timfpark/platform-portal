import Cluster from "./cluster";

interface IApplicationParams {
    id: string;
    name: string;
    clusters: Cluster[];

    status: string;
}

class Application {
    id: string;
    name: string;
    clusters: Cluster[];

    status: string;

    constructor(params: IApplicationParams) {
        this.id = params.id;
        this.name = params.name;
        this.clusters = params.clusters;

        this.status = params.status;
    }
}

export default Application;
