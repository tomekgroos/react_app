import React from "react";

class Car extends React.Component {

    render() {

        if (this.props.brand == "Ford") {
        return <h2>I am an outstanding {this.props.brand}!</h2>
        } else {
            return <h2>I am a  {this.props.brand}!</h2>
        }
    }
}

export default class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand = "Ford"/>
                <Car brand = "Opel"/>
                <Car brand = "Fiat"/>
                <Car brand = "Ford"/>
            </div>
        );
    }
}