import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const QueDeleteModal = (props) => (
    <Modal centered
        show={props.show}
        onHide={props.showdeletemodal}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
            <h4>Do you really want to delete this item?</h4>
            <p>Once deleted, you can not recover this item</p>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="outline-dark"
                onClick={props.showdeletemodal}>
                Close
            </Button>

            <Button
                className="float-right"
                variant="outline-dark"
                onClick={() => props.deletequestionhandler(props.queIndex, props.queid)}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
)

export default QueDeleteModal;