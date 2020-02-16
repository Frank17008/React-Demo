/** @format */
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store/index";
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
            <div>
                <Input
                    placeholder='Enter a key word to add'
                    style={{ width: "200px" }}
                    value={this.state.inputValue}
                    onChange={e => this.handleChange(e)}
                />
                <Button
                    type='primary'
                    style={{ margin: "0 0 10px 10px" }}
                    onClick={() => this.handleClick()}>
                    Add
                </Button>
                <List
                    style={{ width: "500px" }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => this.deleteItem(index)}>
                            {item}
                        </List.Item>
                    )}></List>
            </div>
        );
    }
    handleChange(e) {
        store.dispatch({
            type: "INPUT_CHANGE",
            value: e.target.value
        });
    }
    handleClick() {
        store.dispatch({
            type: "ADD_ITEM"
        });
    }
    // 订阅store state的值发生变化时
    storeSubscribe() {
        // 获取redux store中最新的state值进行赋值
        this.setState(store.getState());
    }
    deleteItem(index) {
        store.dispatch({
            type: "DELETE_ITEM",
            index: index
        });
    }
}
