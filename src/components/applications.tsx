import { Table } from "react-bootstrap";

import Application from "../models/application";

import ApplicationRow from "./applicationRow";

interface IApplicationsProps {
    applications: Application[];
}

function Applications(props: IApplicationsProps) {
    let applicationRows;

    if (props.applications.length > 0) {
        applicationRows = props.applications.map((application) => {
            return (
                <ApplicationRow
                    key={application.id}
                    application={application}
                />
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
        <Table striped bordered hover>
            <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "75%" }} />
            </colgroup>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Clusters</th>
                </tr>
            </thead>
            <tbody>{applicationRows}</tbody>
        </Table>
    );
}

export default Applications;
