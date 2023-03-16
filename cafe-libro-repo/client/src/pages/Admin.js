/* eslint-disable semi */
import React, {Component} from 'react';
import CardList from '../components/CardList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom'
import {AddBookButton} from '../components/buttons'
import '../components/buttons/styles/buttons.css'

const buttonStyle = {
    marginBottom:'10px'
}

class Admin extends Component {

    componentDidMount() {
        console.log("Admin: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;
        //console.log("testing fetchSingleItem:")
        //this.props.fetchSingleItem("602203a2bb255d30606a7d63")
        
        console.log(this.props.fetchAllItems());
    }


    redirect = () => {
        this.props.history.push('/admin/addbook')
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
                <button type="button" className="btn btn-lg" onClick={this.redirect}>Add Book</button>
                <CardList
                    items = {items}
                    type = "update"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);




// /* eslint-disable semi */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';
// import AddBookButton from '../components/buttons/AddBookButton'
// import Logo from '../images/clclib_logo.png'


// /* Vertically centers all contents */
// const adminStyles = {
//     height: '50vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
// }

// const logoStyle = {
//     height: `160px`,
//     width: `160px`
// }

// function Admin () {
//     return (
//     <div className="container" style={adminStyles}>
//         {/* <div className="row justify-content-center">
//             <img src={Logo} style={logoStyle}/>
//         </div>
//         <SearchBar/>
//         <div className="row justify-content-center">
//             <Link to= "/admin/addbook">
//                 <AddBookButton/>
//             </Link>
//         </div> */}
//     </div>
//     );
// }

// export default Admin;
