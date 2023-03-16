import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DeleteButton extends Component {
    confirmDeleteItem = event => {
        event.preventDefault();

        if (
            window.confirm(
                `Do you want to permanently delete this book? `,
            )
        ) {
            this.props.onDelete(this.props.bookId);
        }

    }

    render() {
        return <button className="btn btn-lg" onClick={this.confirmDeleteItem}>Delete Book</button>;
    }
}


export default DeleteButton;
