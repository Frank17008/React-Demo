/** @format */

import React, { Component } from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>List-Page</h2>
                <span>路由参数</span>
                <span style={{ color: "red", fontSize: "20px" }}>
                    {this.state.id}
                </span>
            </div>
        );
    }
    componentDidMount() {
        // 接受路由传递的参数
        let id = this.props.match.params.id;
        this.setState({ id });
    }
}
