import React from "react";

    class Person extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                age: 20
            }
        }

        display = () => {
            console.log(this.state.age)
        }

        render () {
            return (
                <div>
                    <button type="button" onClick={this.props.passed}>Display Age</button>
                </div>
            );
        }
    }

    export default class Parent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                age: 20
            }
        }

        display = () => {
            console.log(this.state.age)
        }

        /* wyniesienie stanu do gory */
        render () {
            return (
                <div>
                    <Person passed={this.display}></Person>
                </div>
            );
        }


    }