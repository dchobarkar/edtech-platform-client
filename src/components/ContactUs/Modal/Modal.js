import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const modal = (props) => (
    <Modal centered
        show={props.show}
        onHide={props.closestatus}
    >
        <Modal.Header closeButton>
            <Modal.Title>Thank you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <i className="fas fa-mobile-alt"></i> We will reach you shortly.
                    </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.closestatus}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
)

export default modal;