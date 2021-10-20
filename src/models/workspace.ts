import Application from "./application";

interface IWorkspaceParams {
    id: string;
    name: string;

    applications: Application[];
}

class Workspace {
    id: string;
    name: string;

    applications: Application[];

    constructor(params: IWorkspaceParams) {
        this.id = params.id;
        this.name = params.name;

        this.applications = params.applications;
    }
}

export default Workspace;
