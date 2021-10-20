import Clusters from "./clusters";
import Application from "../models/application";

interface IApplicationProps {
    application: Application;
}

function ApplicationRow(props: IApplicationProps) {
    const applicationPath = `/application/${props.application.id}`;

    return (
        <tr key={props.application.id}>
            <td>
                <a href={applicationPath}>{props.application.name}</a>
            </td>
            <td>
                <Clusters
                    clusters={props.application.clusters}
                    application={props.application}
                />
            </td>
        </tr>
    );
}

export default ApplicationRow;
