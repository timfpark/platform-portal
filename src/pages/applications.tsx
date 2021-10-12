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

            return (
                <tr key={application.id}>
                    <td>
                        <a href={applicationPath}>{application.name}</a>
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
                <Col>
                    <h2 style={{ marginTop: 10, textAlign: "left" }}>
                        Risk Modeling Workspace
                    </h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
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
