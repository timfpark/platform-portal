import React from "react";
import { Col, Row } from "react-bootstrap";

import Workspace from "../models/workspace";
import Applications from "./applications";
import RegisterApplication from "./registerApplication";

interface IWorkspaceProps {
    workspace: Workspace;
    onAddApplication: (workspace: Workspace) => void;
}

function WorkspaceRow(props: IWorkspaceProps) {
    return (
        <div style={{ paddingBottom: 30 }}>
            <Row>
                <Col>
                    <h2 className="float-start">
                        {props.workspace.name} Workspace
                    </h2>
                </Col>
            </Row>
            <Row>
                <Applications applications={props.workspace.applications} />
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <RegisterApplication
                        workspace={props.workspace}
                        onAddApplication={props.onAddApplication}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default WorkspaceRow;
