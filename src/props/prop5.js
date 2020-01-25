import React from "react";

class Car extends React.Component {

    render() {

            var car;

        if (this.props.brand === "Ford") {
            car = "outstanding!"
        }
            return <h2>I am a {car} {this.props.brand}!</h2>

    }
}

export default class Garage extends React.Component {
    render() {
        var auto = prompt()
        return (

            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand = {auto}/>

            </div>
        );
    }
}