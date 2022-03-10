import React from 'react';
import { Spinner } from 'react-bootstrap';
import './spinner.css';
const SpinnerComponent = () => {
    return (


        <div className='spinner'>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
}

export default SpinnerComponent;
