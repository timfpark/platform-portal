import { Button, Col, Container, Row, Table } from "react-bootstrap";

import Cluster from "../models/cluster";

interface IClustersProps {
    clusters: Cluster[];
    onAddCluster: () => void;
}

function Clusters(props: IClustersProps) {
    let clusterRows;

    if (props.clusters.length > 0) {
        clusterRows = props.clusters.map((cluster) => {
            const clusterPath = `/clusters/${cluster.id}`;
            return (
                <tr key={cluster.id}>
                    <td>
                        <a href={clusterPath}>{cluster.name}</a>
                    </td>
                    <td>{cluster.cloud}</td>
                    <td>{cluster.region}</td>
                </tr>
            );
        });
    } else {
        clusterRows = (
            <tr>
                <td colSpan={3}>No clusters registered.</td>
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
                            <th>Cloud</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>{clusterRows}</tbody>
                </Table>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Button variant="primary" onClick={props.onAddCluster}>
                        Add Cluster
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Clusters;
