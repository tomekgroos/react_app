import React from "react";

export default class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username:""};
    }

    myChangeHandler = (e) => {
        console.log(e);
        this.setState({username: e.target.value});
    }
    
    mySubmitHandler = (e) => {
        e.preventDefault();
        alert("You are submitting " + this.state.username);
    }

    render() {
        let header = " ";
        if (this.state.username){
            header = <h1>Hello {this.state.username}</h1>
        } else {
            header = "";
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input type="text" onChange={this.myChangeHandler}/>
                <input type="submit"/>
            </form>

        );
    }

}