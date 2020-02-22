/** @format */

import React, { Component } from "react";
import LifeCycles from "./LifeCycles";

class HelloReact extends Component {
    state = {
        value: "1"
    };
    componentDidMount() {
        this.setState({
            value: "2"
        });
        setTimeout(() => {
            this.setState({
                value: ""
            });
        }, 2000);
    }
    render() {
        return (
            <div>
                Hello React!
                {this.state.value && (
                    <LifeCycles prop={this.state.value}></LifeCycles>
                )}
            </div>
        );
    }
}

export default HelloReact;
