import React, {Component} from 'react';
import './styles/buttons.css'

class ReturnBookButton extends Component {

    confirmReturnItem = event => {
        event.preventDefault();
        if (
            window.confirm(
                `Do you want to return ${this.props.bookTitle}?`,
            )
        ) {
            console.log("updating item");
            console.log(this.props.bookTitle);
            console.log(this.props.bookId);
            this.props.onReturn(this.props.bookId);
        }
    }
    
    render() {
        return (
            <button type="button" className="btn btn-lg" onClick={this.confirmReturnItem}>Return</button>
        );
    }
}
export default ReturnBookButton;
