import React, {Component} from 'react'
import './styles/form.css'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            isbn: '',
            title: '',
            publication_year: '',
            publisher: '',
            author: '',
            copies: ''
        }

        this.state = {
            isbn: '',
            title: '',
            publication_year: '',
            publisher: '',
            author: '',
            copies: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(`${this.state.title} has been added to the library!`);
        event.preventDefault();
        console.log("current state:");
        const book = this.state;
        this.props.handleSubmit(book);
        this.setState(this.initialState);
    }

    render() {
        return (
            /* Form structure source: https://reactjs.org/docs/forms.html */
            <form onSubmit={this.handleSubmit} className="formStyle">
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>Book Title:</label>
                        <input className="form-control" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>Published Year:</label>
                        <input className="form-control" name="publication_year" type="text" value={this.state.publication_year} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>Publisher:</label>
                        <input className="form-control" name="publisher" type="text" value={this.state.publisher} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>Author(s)</label>
                        <input className="form-control" name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>ISBN:</label>
                        <input className="form-control" name="isbn" type="number" value={this.state.isbn} onChange={this.handleChange} />
                    </div>
                </div>                
                <div className="form-row center-form-input">
                    <div className="col-md-7 form-group">
                        <label>Number of Copies:</label>
                        <input className="form-control" name="copies" type="number" value={this.state.copies} onChange={this.handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Add Book</button>
            </form>
        );
    }
}

export default Form;