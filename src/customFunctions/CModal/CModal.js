import React from 'react';
import { Modal } from 'react-bootstrap';

import './CModal.css';

const CModal = React.memo(function CModal(props) {

    return (
        <Modal
            centered
            animation={true}
            {...props}>

            <Modal.Body>
                {props.children}
            </Modal.Body>

        </Modal>
    )
})

export default CModal;
