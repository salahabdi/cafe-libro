/* eslint-disable semi */
import React, {Component} from 'react';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

/* Vertically centers all contents */
const addBookStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

class AddBook extends Component {

    handleFormSubmission = book => {
        console.log(book);
        const isbn = book.isbn;
        const availableCopies = book.copies;
        const imgSmUrl = `http://images.amazon.com/images/P/${isbn}.01.THUMBZZZ.jpg`;
        const imgMdUrl = `http://images.amazon.com/images/P/${isbn}.01.MZZZZZZZ.jpg`;
        const imgLgUrl = `http://images.amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`;
        book.image_url_s = imgSmUrl;
        book.image_url_m = imgMdUrl;
        book.image_url_l = imgLgUrl;
        book.available = availableCopies;
        this.props.insertSingleItem(book);
    }

    componentDidMount() {
        console.log("AddBook: props");
        console.log(this.props);
    }

    render(){

        return (
            <div className="container" style={addBookStyles}>
                {/* form component here*/}
                <Form handleSubmit = {this.handleFormSubmission}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);

