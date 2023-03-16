import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import {
    NavBar,
    Footer,
    PageLayout,
} from './components';

// Pages
import {
    Home,
    Browse,
    Returns,
    Admin,
    Details,
    AddBook,
    ItemUpdate
} from './pages';


class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.BROWSE} component={Browse} />
                <Route exact path={routes.ADMIN} component={Admin}/>
                <Route exact path={routes.RETURNS} component={Returns}/>
                <Route exact path={routes.ADDBOOK} component={AddBook}/>
                <Route exact path={routes.DETAILS} component={Details}/>
                <Route exact path={routes.BOOKUPDATE} component={ItemUpdate}/>                      
            </Switch>
        );
        

        return (
            <Router>
                <CssBaseline />
                <NavBar />
                <div className="app--main">
                    <div className="container">
                        {publicViews}
                    </div>
                </div>
                <Footer/>
            </Router>
            
        );
    };
};


const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
