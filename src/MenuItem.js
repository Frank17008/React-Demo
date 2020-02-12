/**
 * @format
 * @菜单单项组件
 */

import React, { Component } from "react";

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <li onClick={this.handleClick}>{this.props.content}</li>;
    }
    handleClick() {
        console.log(this.props.index);
        this.props.deleteMenu(this.props.index);
    }
}
