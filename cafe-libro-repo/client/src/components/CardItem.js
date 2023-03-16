import React, {Component} from 'react'
import {BorrowButton, UpdateButton, ReturnBookButton} from './buttons/'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

const imageStyle = {
    height: `auto`,
    width: `100%`
}

const cardStyle = {
    width: `12rem`
}

class CardItem extends Component {

    getButtonType = buttonType => {
        if(buttonType === "borrow"){
            return ( <BorrowButton 
                bookId = {this.props.id}
                bookTitle = {this.props.title}
                onBorrow = {this.handleBorrowClick}/>)
        } else if (buttonType === "update"){
            return (
                <Link to={{
                    pathname:`/update/${this.props.id}`,
                    state:{
                        id: this.props.id,
                        img: `http://images.amazon.com/images/P/0${this.props.isbn}.01.LZZZZZZZ.jpg`,
                        title: this.props.title,
                        isbn: this.props.isbn,
                        author: this.props.author,
                        publisher: this.props.publisher,
                        pubYear: this.props.pubYear,
                        available: this.props.available,
                    }
                }}>
                <UpdateButton
                    bookId = {this.props.id}
                    bookTitle = {this.props.title}
                    />
                </Link>
            )
        } else {
            return <ReturnBookButton
                bookId = {this.props.id}
                bookTitle = {this.props.title}
                onReturn = {this.handleReturnClick}/>;
        }
    }


    // Handles the button click by fetching the book item for the item that was clicked on,
    // decrementing 1 from the book item's available count, and sending the update ot the database.
    handleBorrowClick = bookId => {
        this.props.fetchSingleItem(bookId)
        .then(resp => {
            const { item } = resp.data;
            console.log("handleBorrowClick item");
            console.log(item);
            this.setState({ ...item, available: item.available - 1});
            console.log("going to update item")
            const book = this.state;
            this.props.updateSingleItem(book);
        });
    }

    handleReturnClick = bookId => {
        this.props.fetchSingleItem(bookId)
        .then(resp => {
            const { item } = resp.data;
            console.log("handleReturnClick item");
            console.log(item);
            this.setState({ ...item, available: item.available + 1});
            console.log("going to update item")
            const book = this.state;
            this.props.updateSingleItem(book);
        });
    }

    render() {
        return (
            <div class="card mr-3 mb-5" style={cardStyle}>
                <Link to={{
                    pathname:'/details',
                    state: {
                        id: this.props.id,
                        img: `http://images.amazon.com/images/P/0${this.props.isbn}.01.LZZZZZZZ.jpg`,
                        title: this.props.title,
                        isbn: this.props.isbn,
                        author: this.props.author,
                        publisher: this.props.publisher,
                        pubYear: this.props.pubYear,
                        available: this.props.available
                    }}}>
                    <img class="card-img-top" src={this.props.bookCoverImg} alt="book cover"  ></img>
                </Link>
                <div class="card-body">
                    <p className="card-text" >{this.props.title}</p>
                    {
                        this.getButtonType(this.props.buttonType)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// Connects CardItem component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
