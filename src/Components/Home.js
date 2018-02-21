/**
 * Home component showing the home page
 */
import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import $ from 'jquery';


class Home extends Component {
    //Constructor initializing the current state of persons
    constructor(){
        super();
        this.state={
            users:[],
        }
    }


    /**
     * Function for fetching listing all users
     */
    getUsers(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({users:data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error:function(xhr, status, err){
                console.log(err);
            }
        });

    }

    deleteUser(id){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users/'+id,
            dataType:'json',
            type:'DELETE',
            cache:false,
            success:function(data){

            },
            error:function(xhr, status, err){

            }
        });

    }

    /**
     * Function for creating a new user
     * @param user
     */
    addUser(user){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            dataType:'json',
            type:'POST',
            data : user,
            cache:false,
            success:function(data){
                     this.state.users.push(data);
                     console.log(this.state.users);
                     this.setState({users:this.state.users});

            }.bind(this),
            error:function(xhr, status, err){

            }
        });

    }

    //Functions to call on component initialization
    componentWillMount(){
        this.getUsers();

    }
    // ComponentDidMount(){
    //     this.getUsers();
    // }

    /**
     *
     * @param id
     */
    handleDelUser(id){
        var ask = window.confirm("Are you sure you want to delete this user?");
        if (ask) {
            console.log(id);
            let persons = this.state.persons;
            let index = persons.findIndex(x => x.id === id);
            persons.splice(index, 1);
            this.setState({persons: persons});
            this.deletePerson(id);
        }
    }

    //Rendering for display
    render() {
        return (
            <div className="Home">
                <AddUser addUser={this.addUser.bind(this)}/><br/>
                    <Users users={this.state.users} onDelete={this.handleDelUser.bind(this)}/>
            </div>
        );
    }

}

export default Home;
