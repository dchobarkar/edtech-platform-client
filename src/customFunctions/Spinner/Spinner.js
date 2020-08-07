import React from 'react';

import './Spinner.css';

const LoadingSpinner = React.memo(function LoadingSpinner(props) {
    return (
        <div className="sk-chase loader">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    )
})

export default LoadingSpinner;