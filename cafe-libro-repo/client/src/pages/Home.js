/* eslint-disable semi */
import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import SearchBar from '../components/SearchBar';
import ReturnButton from '../components/buttons/ReturnButton'
import BrowseButton from '../components/buttons/BrowseButton'
import Logo from '../images/clclib_logo.png'

/* Vertically centers all contents */
const homeStyles = {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const logoStyle = {
    height: `160px`,
    width: `160px`
}

function Home () {
    return (
    <div className="container" style={homeStyles}>
        <div className="row justify-content-center">
            <img src={Logo} style={logoStyle}/>
        </div>
        <SearchBar/>
        <div className="row justify-content-center">
            <ReturnButton/>
        </div>
        <div className="row justify-content-center">
            <BrowseButton/>
        </div>
    </div>
    );
}

export default Home;
