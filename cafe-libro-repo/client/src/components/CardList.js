import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardItem from './CardItem'
import * as actions from '../actions';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class CardList extends Component {

    render() {
        return (
            <div class="container">
                <div className = "row">
                    {
                        // item.available doesn't make sense with returns page
                        this.props.items.map((item, index) =>{
                            if(item.available > 0){
                                return <CardItem key={index} 
                                        title = {item.title} 
                                        bookCoverImg = {item.image_url_l} 
                                        id = {item._id}
                                        author = {item.author}
                                        publisher = {item.publisher}
                                        pubYear = {item.publication_year}
                                        available = {item.available}
                                        isbn = {item.isbn}
                                        buttonType = {this.props.type}/>
                            }
                        })   
                    }
                </div>
            </div>
        );
    }
}

export default CardList;