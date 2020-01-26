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

    render() {
        let header = " ";
        if (this.state.username){
            header = <h1>Hello {this.state.username}</h1>
        } else {
            header = "";
        }
        return (
            <form>
                {header}
                <p>Enter your name: </p>
                <input type="text" onChange={this.myChangeHandler}/>
            </form>
        );
    }

}