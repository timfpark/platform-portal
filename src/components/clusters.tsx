import Application from "../models/application";
import Cluster from "../models/cluster";

interface IClustersProps {
    application: Application;
    clusters: Cluster[];
}

function Clusters(props: IClustersProps) {
    const clusters = props.clusters.map((cluster) => {
        return (
            <span style={{ color: props.application.status }}>
                {cluster.name}{" "}
            </span>
        );
    });

    return <>{clusters}</>;
}

export default Clusters;
