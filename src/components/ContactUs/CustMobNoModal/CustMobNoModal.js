import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustMobNoModal = (props) => (
    <Modal centered
        show={props.showmodal}
        onHide={props.modalhandler}>

        <Modal.Header closeButton>
            <Modal.Title>Thank you</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <i className="fas fa-mobile-alt"></i>
            We will reach you shortly.
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="secondary"
                onClick={props.modalhandler}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
)

export default CustMobNoModal;