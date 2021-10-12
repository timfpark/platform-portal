interface IClusterParams {
    id: string;
    name: string;
    cloud: string;
    region: string;
}

class Cluster {
    id: string;
    name: string;
    cloud: string;
    region: string;

    constructor(params: IClusterParams) {
        this.id = params.id;
        this.name = params.name;
        this.cloud = params.cloud;
        this.region = params.region;
    }
}

export default Cluster;
