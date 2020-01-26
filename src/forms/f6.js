import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let errAge = '';
        let errName = '';


        if (nam === "age") {
            if (val !="" && !Number(val)) {
                errAge = <strong>Your age must be a number</strong>;

            }
            this.setState({errormessage: errAge});
        }

        if (nam == "username"){
            if (val.length <= 2){
                errName = <strong>Your name must be more than 2 characters</strong>;

            }
            this.setState({errormessage: errName});
        }

        this.setState({[nam]: val});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}