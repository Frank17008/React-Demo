/**
 * @format
 * @React生命周期
 *
 */

import React, { Component } from "react";
export default class LifeCycles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    UNSAFE_componentWillMount() {
        console.log("1--componentWillMount----组件将要挂载到页面");
    }
    componentDidMount() {
        console.log("3--componentDidMount---组件挂载完成");
    }
    shouldComponentUpdate() {
        console.log("4--shouldComponentUpdate----组件是否要更新");
        return true;
    }
    UNSAFE_componentWillUpdate() {
        console.log("5--componentWillUpdate----组件将要更新");
    }
    UNSAFE_componentDidUpdate() {
        console.log("6--componentWillUpdate----组件更新完成");
    }
    // 组件第一次存在于Dom中,函数不会执行
    // 如果已经存在于DOM中,函数才会执行
    UNSAFE_componentWillReceiveProps() {
        console.log("child--componentWillReceiveProps");
    }
    UNSAFE_componentWillUnmount() {
        console.log("7--componentWillUnmount--组件卸载时执行");
    }
    render() {
        console.log("2--render----组件挂载中");
        return (
            <div>
                <h2>React生命周期</h2>
                <input type='text' onChange={this.inputChange.bind(this)} />
            </div>
        );
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
}
