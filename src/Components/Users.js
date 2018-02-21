import React, { Component } from 'react';
import SingleUser from './SingleUser';

class Users extends Component {
    deleteUser(id){
        this.props.deleteUser()
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        let allUsers;
        //Mapping the person details from parent component
        if(this.props.users){
            allUsers = this.props.users.map(user=>{
                  return (
                    <SingleUser onDelete={this.deleteUser.bind(this)} key={user.name} user={user} />

                );
            });
        }

        /**
         *Render all Users
         */
        return (
            <div className="Users">
                <ul className="list-group">
                {allUsers}
                </ul>
            </div>
        );
    }
}

export default Users;