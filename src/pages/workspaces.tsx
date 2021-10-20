import { Container } from "react-bootstrap";

import Workspace from "../models/workspace";
import WorkspaceRow from "../components/workspaceRow";

interface IWorkspacesProps {
    workspaces: Workspace[];
    onAddApplication: (workspace: Workspace) => void;
}

function Workspaces(props: IWorkspacesProps) {
    const workspaceRows = props.workspaces.map((workspace) => {
        return (
            <WorkspaceRow
                workspace={workspace}
                onAddApplication={props.onAddApplication}
            />
        );
    });

    return <Container>{workspaceRows}</Container>;
}

export default Workspaces;
