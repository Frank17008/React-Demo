/** @format
 * Redux todolist的demo
 */
import React, { Component } from "react";

import store from "./store/index";
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";
import TodoListUI from "./TodoListUI";
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // 如果Line19 input绑定value属性,值取自state,则输入变化时需要进行store订阅
        this.storeSubscribe = this.storeSubscribe.bind(this);
        store.subscribe(this.storeSubscribe);
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.props.inputValue}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                deleteItem={this.deleteItem}
                list={this.state.list}
            />
        );
    }
    handleChange(e) {
        store.dispatch({
            type: INPUT_CHANGE,
            value: e.target.value
        });
    }
    handleClick() {
        store.dispatch({
            type: ADD_ITEM
        });
    }
    // 订阅store state的值发生变化时
    storeSubscribe() {
        // 获取redux store中最新的state值进行赋值
        this.setState(store.getState());
    }
    deleteItem(index) {
        store.dispatch({
            type: DELETE_ITEM,
            index: index
        });
    }
}
