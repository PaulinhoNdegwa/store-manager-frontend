import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <Menu secondary>
                <NavLink to="/">
                    <Menu.Item
                        name='home'
                    />
                </NavLink>
                <NavLink to="/cart">
                    <Menu.Item
                        name='cart'
                    />
                </NavLink>
                <NavLink to="/category">
                    <Menu.Item
                        name='category'
                    />
                </NavLink>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <NavLink to="/login">
                        <Menu.Item
                            name='logout'
                        />
                    </NavLink>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(Navbar)