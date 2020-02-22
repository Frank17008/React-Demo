/**
 * @format
 * @React生命周期的触发条件
 * 组件自身state状态发生改变
 * 父组件传递的属性值发生改变时
 */

import React, { Component } from "react";
export default class LifeCycles extends Component {
    constructor(props) {
        // 状态初始化
        super(props);
        this.state = {
            inputValue: ""
        };
    }
    componentWillMount() {
        console.log("1--componentWillMount----组件将要挂载到页面");
    }
    componentDidMount() {
        console.log("3--componentDidMount---组件挂载完成");
    }
    shouldComponentUpdate() {
        console.log("5--shouldComponentUpdate----组件是否要更新");
        return true;
    }
    componentWillUpdate() {
        console.log("6--componentWillUpdate----组件将要更新");
    }
    componentDidUpdate() {
        console.log("7--componentWillUpdate----组件更新完成");
    }
    // 组件第一次存在于Dom中,函数不会执行
    // 如果已经存在于DOM中,函数才会执行 父组件传递的属性值变化时此钩子函数运行
    componentWillReceiveProps() {
        console.log("4-child--componentWillReceiveProps");
    }
    componentWillUnmount() {
        console.log("8--componentWillUnmount--组件卸载时执行");
    }
    render() {
        console.log("2--render----组件渲染中");
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
