/* eslint-disable semi */
import React, {Component} from 'react';
import CardList from '../components/CardList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Browse extends Component {

    componentDidMount() {
        console.log("Browse: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;
        //console.log("testing fetchSingleItem:")
        //this.props.fetchSingleItem("602203a2bb255d30606a7d63")
        
        console.log(this.props.fetchAllItems());
    }

    render(){
        const {
            item,
            items,
            loaded,
            loading
        } = this.props.itemData || {};
        
        console.log("props:");
        console.log(this.props.itemData);
        console.log(items);

        return(
            <div className="container">
                <h2>Available books</h2>
                <CardList
                    items = {items}
                    type = "borrow"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Browse);