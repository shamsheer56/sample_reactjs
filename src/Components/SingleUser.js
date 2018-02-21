import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleUser extends Component {

    /**
     * rendering user details
     * @returns {XML}
     */
    render() {
        return (
            <li className="SingleUser list-group-item">{this.props.user.name} - {this.props.user.email}</li>
        );
    }
}
export default SingleUser;