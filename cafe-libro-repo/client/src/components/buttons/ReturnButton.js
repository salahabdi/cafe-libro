import React from 'react';
import './styles/buttons.css'
import {useHistory} from 'react-router-dom';

const ReturnButton = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/returns');
    }

    return (
        <button type="button" className="btn btn-lg" onClick={redirect}>Return</button>
    );
}
export default ReturnButton;
