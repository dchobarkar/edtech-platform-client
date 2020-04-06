import React from 'react';
import { Button } from 'react-bootstrap';

import DModal from '../../../../components/DModal/DModal';

const QueDeleteModal = (props) => (
    <DModal
        show={props.show}
        modalhandler={props.showdeletemodal}>

        <h4>Do you really want to delete this item?</h4>
        <p>Once deleted, you can not recover this item</p>

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
    </DModal>
)

export default QueDeleteModal;