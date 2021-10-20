import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import Workspace from "../models/workspace";

interface IWorkspaceProps {
    workspace: Workspace;
    onAddApplication: (workspace: Workspace) => void;
}

function RegisterApplication(props: IWorkspaceProps) {
    const [show, setShow] = useState(false);

    const handleSave = () => {
        setShow(false);
        props.onAddApplication(props.workspace);
    };

    const handleRegister = () => setShow(true);

    return (
        <>
            <Button
                className="float-end"
                variant="primary"
                onClick={handleRegister}
            >
                Register Application
            </Button>

            <Modal
                show={show}
                onHide={handleSave}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Register Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Name</b>
                            </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="My Application"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <b>Repo URL</b>
                            </Form.Label>
                            <Form.Control
                                type="repourl"
                                placeholder="https://github.com/myorg/myapp"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSave}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterApplication;
