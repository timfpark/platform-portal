import { Button, Col, Container, Row, Table } from "react-bootstrap";

import Application from "../models/application";

interface IApplicationsProps {
    applications: Application[];
    onAddApplication: () => void;
}

function Applications(props: IApplicationsProps) {
    let applicationRows;

    if (props.applications.length > 0) {
        applicationRows = props.applications.map((application) => {
            const applicationPath = `/application/${application.id}`;
            const applicationClusters = application.clusters.map((cluster) => {
                const clusterPath = `/clusters/${cluster.id}`;
                return (
                    <>
                        <a href={clusterPath}>{cluster.name}</a>{" "}
                    </>
                );
            });
            const workspacePath = `/workspaces/${application.workspace.id}`;

            return (
                <tr key={application.id}>
                    <td>
                        <a href={applicationPath}>{application.name}</a>
                    </td>
                    <td>
                        <a href={workspacePath}>{application.workspace.name}</a>
                    </td>
                    <td>{applicationClusters}</td>
                </tr>
            );
        });
    } else {
        applicationRows = (
            <tr>
                <td colSpan={3}>No applications registered.</td>
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
                            <th>Workspace</th>
                            <th>Clusters</th>
                        </tr>
                    </thead>
                    <tbody>{applicationRows}</tbody>
                </Table>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Button variant="primary" onClick={props.onAddApplication}>
                        Add Application
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Applications;
