import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = (props) => (
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
                onClick={() => props.deletecontenthandler(props.sectionid, props.contentid)}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
)

export default DeleteModal;