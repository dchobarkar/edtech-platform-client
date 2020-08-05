import React from 'react';
import { Button } from 'react-bootstrap';

import './CButton.css';

const CButton = React.memo(function CButton(props) {
    return (
        <Button
            {...props}>
            {props.children}
        </Button>
    )
})

export default CButton;