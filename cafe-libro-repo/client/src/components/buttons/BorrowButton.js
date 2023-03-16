import React, { Component } from 'react';
import './styles/buttons.css'

class BorrowButton extends Component {

    confirmBorrowItem = event => {
        event.preventDefault();
        if (
            window.confirm(
                `Do you want to borrow ${this.props.bookTitle}?`,
            )
        ) {
            console.log("updating item");
            console.log(this.props.bookTitle);
            console.log(this.props.bookId);
            console.log("testing: " + this.props.onBorrow);
            this.props.onBorrow(this.props.bookId);
        }
    }

    render(){
        return (
            <button type="button" className="btn btn-lg" onClick={this.confirmBorrowItem}>Borrow</button>
        );
    }
}

export default BorrowButton;