import React from 'react';
import { Modal } from 'react-bootstrap';
import CSSTransition from "react-transition-group/CSSTransition";

import './CModal.css';

const CModal = React.memo(function CModal(props) {
    const animationTiming = {
        enter: 400,
        exit: 1000
    };

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}>
            <Modal
                centered
                animation={true}
                {...props}>

                <Modal.Body>
                    {props.children}
                </Modal.Body>

            </Modal>
        </CSSTransition>
    )
})

export default CModal;
