/**
 * @format
 * @菜单单项组件
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // 组件是否更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.content, this.props.content);
        // 优化,防止子组件频繁渲染
        return nextProps.content !== this.props.content ? true : false;
    }
    render() {
        console.log("child-render");
        return (
            <li onClick={this.handleClick}>
                {this.props.customer}-点了-{this.props.content}
            </li>
        );
    }
    handleClick() {
        this.props.deleteMenu(this.props.index);
    }
}
// 校验父组件传递过来的值的类型
MenuItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteMenu: PropTypes.func,
    customer: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
    customer: "VIP客户"
};
