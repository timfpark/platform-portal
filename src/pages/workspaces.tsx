import { Container, Row, Table } from "react-bootstrap";

import Workspace from "../models/workspace";

interface IWorkspacesProps {
    workspaces: Workspace[];
}

function Workspaces(props: IWorkspacesProps) {
    let clusterRows;

    if (props.workspaces.length > 0) {
        clusterRows = props.workspaces.map((workspace) => {
            const workspacePath = `/workspaces/${workspace.id}`;
            return (
                <tr key={workspace.name}>
                    <td>
                        <a href={workspacePath}>{workspace.name}</a>
                    </td>
                </tr>
            );
        });
    } else {
        clusterRows = (
            <tr>
                <td colSpan={3}>No workspaces registered.</td>
            </tr>
        );
    }

    return (
        <Container>
            <Row>
                <Table striped bordered hover style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>{clusterRows}</tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default Workspaces;
