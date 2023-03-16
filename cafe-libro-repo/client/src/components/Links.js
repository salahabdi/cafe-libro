import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import AdminKey from '../styles/assets/admin_key.svg'


const HomeWrapper = styled.div``;

const Collapse = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        display: flex;
        flex-grow: 1;
    }
`;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
    @media screen and (max-width: 420px) {
        flex-direction: row;
        justify-content: space-between;
        /* justify-content: flex-start; */
        width: 100%;
    }
`;

const Item = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        /* margin-right: 2em; */
    }
`;

const homeStyles = {
    marginLeft: `1em`
};

const logoStyles = {
    height: '40px',
    width: '40px',
};

const linkStyles = {
    color: `#000000`
};


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeWrapper>
                    <Link
                        to="/"
                        className="navbar-brand"
                    >
                    <Logo logoStyles={logoStyles} />
                    </Link>
                </HomeWrapper>
                <Collapse>
                    <List>
                    <Item>
                            <Link
                                to="/browse"
                                className="nav-link"
                                style={linkStyles}
                            >
                                Browse
                            </Link> 
                        </Item>
                        {/* <Item>
                            <Link
                                to="/items"
                                className="nav-link"
                                style={linkStyles}
                            >
                                Items
                            </Link>
                        </Item>
                        <Item>
                            <Link
                                to="/item/create"
                                className="nav-link"
                                style={linkStyles}
                            >
                                Create Item
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/items/react-table-v6" 
                                  className="nav-link" 
                                  style={linkStyles}
                            >
                                Items (react-table-v6)
                            </Link>
                        </Item> */}
                        <Link
                                to="/admin"
                                className="nav-link admin"
                                style={linkStyles}
                            >
                                Admin
                                <img src={AdminKey} alt="Admin key"></img>
                            </Link>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default Links;
