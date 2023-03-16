import React, {Component} from 'react';
import SearchIcon from '../styles/assets/search_icon.svg'


/* TODO: Add functionality to search bar. Store user input into a state */

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookId: ''
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <div className="input-group mb-4">
                            <input type = "text" className="form-control" placeholder="Book title / ISBN"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <img src={SearchIcon} alt="search" aria-label="Search"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;