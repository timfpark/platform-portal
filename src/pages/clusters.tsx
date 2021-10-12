import { Button, Table } from "react-bootstrap";

import Cluster from "../models/cluster";

interface IClustersProps {
    clusters: Cluster[];
    onAddCluster: () => void;
}

function Clusters(props: IClustersProps) {
    let clusterRows;

    if (props.clusters.length > 0) {
        clusterRows = props.clusters.map((cluster) => {
            return (
                <tr key={cluster.name}>
                    <td>{cluster.name}</td>
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
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cloud</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>{clusterRows}</tbody>
            </Table>
            <Button variant="primary" onClick={props.onAddCluster}>
                Add Cluster
            </Button>
        </>
    );
}

export default Clusters;
