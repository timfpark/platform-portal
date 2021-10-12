interface IWorkspaceParams {
    id: string;
    name: string;
}

class Workspace {
    id: string;
    name: string;

    constructor(params: IWorkspaceParams) {
        this.id = params.id;
        this.name = params.name;
    }
}

export default Workspace;
