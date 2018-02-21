import React, { Component } from 'react';

class AddUser extends Component {
    //Declaring state for storing the new person object
    constructor(){
        super();
        this.state = {
            newUser:{},
        }

    }

    /**
     * for submit purpose
     * @param e
     */
    onSubmit(e){
        e.preventDefault();
            this.setState({newUser:{
                id:1001,
                name:this.refs.name.value,
                username:this.refs.username.value,
                email:this.refs.email.value,
            }},function(){
                this.props.addUser(this.state.newUser);
            })
           }

    /**
     * rendering purpose
     * @returns {XML}
     */
    render() {

        return (
            <div className="AddUser">
                <h3>Add User</h3>
                <form className="form-horizontal" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label  htmlFor="name">Name</label>
                        <input type="text" className="form-control" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="group">Username</label>
                        <input type="text" className="form-control" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="name">Email</label>
                        <input type="text" className="form-control" ref="email" />
                    </div>
                    <button type="submit" name="submit" className="btn btn-primary sm">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;
