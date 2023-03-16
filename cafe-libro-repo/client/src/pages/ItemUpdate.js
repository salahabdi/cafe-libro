import React, { Component , useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';

class ItemUpdate extends Component{

    constructor(props){
        super(props);
        console.dir(props);
        this.state = {
            count: 0
        }
    }

    handleDelete = bookId => {
        this.props.deleteSingleItem(bookId)
        .then(res =>
            this.props.history.push('/admin')
        );
    }

    handleSubmitChanges = () => {
        const newCopies = this.state.count;
        this.setState({...this.state, copies: newCopies });
        delete this.state.count;
        console.log(this.state);
        const updatedBook = this.state;
        this.props.updateSingleItem(updatedBook);
    }

    componentDidMount(){
        const id =  this.props.location.state.id;
        this.props.fetchSingleItem(id)
        .then(resp => {
            const {item} = resp.data;
            this.setState({...item, count: item.copies} );
            console.log(this.state);
        })
    }

    render() {
        const id = this.state?.id || "Not loaded yet"
        const title = this.state?.title || "Not loaded yet";
        const author = this.state?.author || "Not loaded yet";
        const publisher = this.state?.publisher || "Not loaded yet";
        const pubYear = this.state?.publication_year || "Not loaded yet";
        const copies = this.state?.copies || "Not loaded yet";
        const image = this.state?.image_url_l || "Not loaded yet";
        const isbn = this.state?.isbn || "Not loaded yet";

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
                    <p>Available Copies: {copies}</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="copies input" aria-describedby="button-addon4" placeholder={this.state.count} />
                        <div class="input-group-append" id="button-addon4">
                            {/* Don't allow user to decrement below 0 */}
                            <button class="btn btn-outline-secondary" type="button" onClick={() => this.setState({count: this.state.count - 1})}>-</button>
                            <button class="btn btn-outline-secondary" type="button" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                        </div>
                    </div>
                    <DeleteButton bookId= {this.props.location.state.id} onDelete={this.handleDelete}/>
                    <br/>
                    <button className = "btn btn-lg mt-3" onClick={() => this.handleSubmitChanges(id)}>Submit Changes</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);

