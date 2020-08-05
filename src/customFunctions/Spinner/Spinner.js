import React from 'react';

import './Spinner.css';

const LoadingSpinner = React.memo(function LoadingSpinner(props) {
    return (
        <div className="loader">Loading...</div>
    )
})

export default LoadingSpinner;