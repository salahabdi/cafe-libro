import React, { Component } from 'react';
import './styles/buttons.css'
import {useHistory} from 'react-router-dom';
import ArrowIcon from '../../styles/assets/browse_arrow_icon.svg'

const BrowseButton = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/browse');
    }

    return (
        <button type="button" class="browse-btn btn-link" onClick={redirect}>
            Browse
            <img src={ArrowIcon} alt = "arrow"/>
        </button>    
    );
}
export default BrowseButton;
