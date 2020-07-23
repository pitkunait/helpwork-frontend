import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


export const WholePageSpinner = () => <div
    style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flex:1 }}><Spinner
    animation="border" variant="primary"/></div>;

