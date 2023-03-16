import React, {Component} from 'react';
import './styles/details.css';
import {Link} from 'react-router-dom'


const Details = props => {

    const id = props.location.state.id;
    const image = props.location.state.img;
    const title = props.location.state.title;
    const isbn = props.location.state.isbn;
    const author = props.location.state.author;
    const publisher = props.location.state.publisher;
    const pubYear = props.location.state.pubYear;
    const availableCopies = props.location.state.available;


    return(
        <div className="container book-info-container">
            <div className="container">
                <img src={image}/>
            </div>
            <div className="container book-info">
                <p><span id="book-title">{title}</span></p>
                <p>by {author}</p>
                <hr/>
                <p>Published in {pubYear} by {publisher}</p>
                <p>ISBN: {isbn}</p>
                <p>Available Copies: {availableCopies}</p>
                <Link to="/browse">
                    <button type="button" className="btn btn-lg">Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Details;